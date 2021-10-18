const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET || 'senha';

const createToken = (user) => {
  const { password: _, ...payload } = user;
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '15d',
  };
  const token = jwt.sign(payload, secret, jwtConfig);
  return { token };
};

module.exports = { createToken }; 