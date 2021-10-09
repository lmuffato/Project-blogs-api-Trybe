const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const { env: { SECRET } } = process;

const generateToken = (data) => {
  const token = jwt.sign({ data }, SECRET, jwtConfig);
  return token;
};

module.exports = generateToken;
