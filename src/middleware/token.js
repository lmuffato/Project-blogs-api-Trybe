const SECRET_PASS = process.env.JWT_SECRET;

const jwt = require('jsonwebtoken');
require('dotenv').config();

const newToken = (user) => {
  const { password: _, ...payload } = user;
  const config = { algorithm: 'HS256', expiresIn: '1d' };
  const token = jwt.sign(payload, SECRET_PASS, config);
  return token;
};

module.exports = {
  newToken,
};