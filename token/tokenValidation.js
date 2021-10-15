const jwt = require('jsonwebtoken');

const { User } = require('../models');

require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'supersenha';

// const verify = (token) => {
//   const payload = jwt.verify(token, JWT_SECRET);
//   return payload;
// }; 
const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    // console.log(payload, 'so PAYLOAD');
    // console.log(payload.data, 'data PAYLOAD');

    const { email } = payload.data;
    const user = await User.findOne({ where: { email } });
    if (!user) res.status(401).json({ message: 'Expired or invalid token' });
  
    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  tokenValidation,
};