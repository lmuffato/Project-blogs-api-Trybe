const jwt = require('jsonwebtoken');
const { Users } = require('../models');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8 || typeof displayName !== 'string') {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  const findEmail = await Users.findOne({ where: { email } });
  if (findEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  if (password.length !== 6) {
    return res.status(400).json({ 
      message: '"password" length must be 6 characters long',
    });
  }
  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    jwt.verify(authorization, JWT_SECRET);
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateEmail,
  validateName,
  validatePassword,
  validateToken,
};