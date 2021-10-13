require('dotenv/config');

const { sign } = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mysecret';

const jwtConfig = {
  expiresIn: '24h',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const token = sign({ data: user }, secret, jwtConfig);
  return { token };
};

module.exports = { createToken };