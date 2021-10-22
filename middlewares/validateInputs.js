const { User } = require('../models');
require('dotenv').config();
const helpers = require('../helpers/functionsHelpers');

const validateEmail = async (req, res, next) => {
   const { email } = req.body;
   const emailRegex = /[^@]+@[^.]+\..+/g;
   if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  } 
   if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
   }

   next();
};

const emailAlreadyExists = async (req, res, next) => {
const { email } = req.body;
const exists = await User.findOne({ where: { email } });
console.log('console do email', email);
  if (exists) {
    console.log('entrou aqui');
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

const expiredToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;

  try {
    const user = await helpers.verifyTokenValid(token, secret);
    req.user = user;
    next();
  } catch (_err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const validateCreateUser = [
  validateEmail,
  emailAlreadyExists,
  validateDisplayName,
  validatePassword,
];

const validateLogin = [
  validateEmail,
  validatePassword,
];

module.exports = {
  validateCreateUser,
  validateLogin,
  validateToken,
  expiredToken,
};