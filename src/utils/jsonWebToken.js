require('dotenv').config();
const jwt = require('jsonwebtoken');
const errorsObject = require('./errorsObject');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (payload) => jwt.sign(payload, JWT_SECRET, jwtConfig);

const verifyToken = (token) => {
  if (!token) throw errorsObject.tokenNotFound;
  const payload = jwt.verify(token, JWT_SECRET);
  return payload;
};

module.exports = {
  createToken,
  verifyToken,
};
