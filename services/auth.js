require('dotenv');

const jwt = require('jsonwebtoken');
const error = require('./error');
const { User } = require('../models');

const SECRET = process.env.JWT_SECRET;

const generateToken = (email, password) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };
  const tokenNum = jwt.sign({ email, password }, SECRET, jwtConfig);
  return ({ token: tokenNum });
};

const isInvalidLogin = async (email, password) => {
  if (email === '') return error.emptyEmail;
  if (!email) return error.requiredEmail;
  if (password === '') return error.emptyPassword;
  if (!password) return error.requiredPassword;
  return null;
};

const validateJWT = async (authorization) => {
  if (!authorization) throw error.tokenNotFound;
  const verifyToken = jwt.verify(authorization, SECRET);
  const userEmail = await User.findOne({ where: { email: verifyToken.email } });
  if (userEmail) return true;
  return false;
};

module.exports = {
  generateToken,
  isInvalidLogin,
  validateJWT,
};