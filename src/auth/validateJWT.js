const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const validateJWT = (token) => {
  const payload = jwt.verify(token, secret);
  return payload;
};

module.exports = { validateJWT };