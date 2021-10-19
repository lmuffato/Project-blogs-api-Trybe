const Jwt = require('jsonwebtoken');
require('dotenv').config();

const { SECRET_TOKEN } = process.env;

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '60m',
};

const checkIfTokenExists = (token) => {
  if (!token) {
    const error = new Error('missing auth token');
    error.code = 401;
    throw error;
  }
};

const isTokenValid = (token) => {
  try {
    Jwt.verify(token, SECRET_TOKEN);
  } catch (err) {
    err.message = 'jwt malformed';
    err.code = 401;
    throw err;
  }
};

const createToken = (user) => {
  const { password: _, ...payload } = user;
  const token = Jwt.sign(payload, SECRET_TOKEN, jwtConfig);
  return token;
};

const validateToken = (req, _res, next) => {
  const token = req.headers.authorization;
  checkIfTokenExists(token);
  isTokenValid(token);
  const payload = Jwt.verify(token, SECRET_TOKEN);
  req.user = payload;
  next();
};

module.exports = {
  createToken,
  validateToken,
};
