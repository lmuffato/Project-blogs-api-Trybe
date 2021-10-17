require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const create = (name, email) => {
  const token = jwt.sign({ name, email }, secret, jwtConfig);
  return token;
};

module.exports = { create };