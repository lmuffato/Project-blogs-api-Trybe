const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_PASSWORD = process.env.SECRET_TOKEN || 'mySuperMegaSecretToken';

const JWT_SETTINGS = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const generateToken = (user) => {
  const token = jwt.sign({ data: user }, SECRET_PASSWORD, JWT_SETTINGS);
  return token;
};

module.exports = generateToken;
