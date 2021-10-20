const jwt = require('jsonwebtoken');
require('dotenv').config('');

const SECRET = process.env.JWT_SECRET || 'umasenhasupersecreta';

const jwtConfig = { expiresIn: '2d', algorithm: 'HS256' };

const newToken = (payload) => {
  const token = jwt.sign(payload, SECRET, jwtConfig);
  return token;
};

module.exports = {
  newToken,
};