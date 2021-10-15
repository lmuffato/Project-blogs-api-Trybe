const { sign } = require('jsonwebtoken');
require('dotenv/config');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

const genToken = (email, id) => {
  const token = sign({ email, id }, JWT_SECRET, jwtConfig);
  return token;
};

module.exports = {
  genToken,
};