require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'minhasupersenha';

const jwtC = {
  expiresIn: '10d',
  algorithm: 'HS256',
};

const genToken = (data) => {
  const token = jwt.sign({ data }, secret, jwtC);
  return token;
};

module.exports = {
  genToken,
};