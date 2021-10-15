const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '15m',
};

const createToken = (id, displayName, email, image) => {
  const user = { id, displayName, email, image };
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};
