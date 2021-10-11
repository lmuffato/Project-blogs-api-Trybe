const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET || '123456';

const generateToken = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return token;
};

module.exports = generateToken;
