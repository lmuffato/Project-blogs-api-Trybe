const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET || 'meusupersegredo';

const JWT_CONFIG = {
  expiresIn: '30d',
  algorithm: 'HS256',
};

const tokenGenerator = (user) => {
  const token = jwt.sign({ data: user }, SECRET, JWT_CONFIG);
  return token;
};

module.exports = tokenGenerator;