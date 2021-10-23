const Jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '60m',
};

const checkIfTokenExists = (token) => {
  if (!token) {
    const error = new Error('Token not found');
    error.code = 401;
    throw error;
  }
};

const isTokenValid = (token) => {
  try {
    Jwt.verify(token, JWT_SECRET);
  } catch (err) {
    err.message = 'Expired or invalid token';
    err.code = 401;
    throw err;
  }
};

const createToken = (user) => {
  const { password: _, ...payload } = user;
  const token = Jwt.sign(payload, JWT_SECRET, jwtConfig);
  return token;
};

const validateToken = (req, _res, next) => {
  const token = req.headers.authorization;
  checkIfTokenExists(token);
  isTokenValid(token);
  const payload = Jwt.verify(token, JWT_SECRET);
  req.user = payload;
  next();
};

module.exports = {
  createToken,
  validateToken,
};
