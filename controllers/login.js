const jwt = require('jsonwebtoken');
const { User } = require('../models');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const secret = 'secret123';

const validateUserData = async (email, password) => {
  if (email === '') {
 return {
    code: 400,
    message: '\"email\" is not allowed to be empty',
  }; 
}

if (password === '') {
  return {
     code: 400,
     message: '\"password\" is not allowed to be empty',
   }; 
 }

  const user = await User.findOne({ where: { email } });
  
  if (!user || user.password !== password) {
 return {
    code: 400,
    message: 'Invalid fields',
  }; 
}

  return { user };
};

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if (password === undefined) return res.status(400).json({ message: '\"password\" is required' });
  if (email === undefined) return res.status(400).json({ message: '\"email\" is required' });

  const { code, message, user } = await validateUserData(email, password);

  if (message) return res.status(code).json({ message });

  const jwtconfig = {
    expiresIn: '15m',
    algorithm: 'HS256',
  };

  const formattedUser = { email: user.email };

  const token = jwt.sign({ data: formattedUser }, secret, jwtconfig);
  return res.status(200).json({ token });
};