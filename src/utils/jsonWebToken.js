require('dotenv').config();
const jwt = require('jsonwebtoken');
const errorsObject = require('./errorsObject');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign({ userData: payload }, JWT_SECRET, jwtConfig);

const verifyToken = (token) => {
  if (!token) throw errorsObject.tokenNotFound;
  jwt.verify(token, JWT_SECRET);
  return true;
};

module.exports = {
  createToken,
  verifyToken,
};
