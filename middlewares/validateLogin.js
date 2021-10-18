const { User } = require('../models');

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password || password.length !== 6) {
    return res.status(400).json({ message: '"password" is required' });
  }
  
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /[^@]+@[^.]+\..+/g;
  if (email === '') {
   return res.status(400).json({ message: '"email" is not allowed to be empty' });
 } 
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!emailRegex.test(email)) {
   return res.status(400).json({ message: 'campos inválidos' });
  }

  next();
};

const userNotExists = async (req, res, next) => {
  const { email } = req.body;
  const exists = await User.findOne({ where: { email } });
    if (!exists) {
      return res.status(400).json({ message: 'Invalid fields' });
    }
    next();
  };

const validateLogin = [
  validatePassword,
  validateEmail,
  userNotExists,
];

module.exports = {
  validateLogin,
};