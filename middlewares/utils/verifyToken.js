require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const verifyToken = (token) => {
  const response = jwt.verify(token, secret);
  return response.user;
};

module.exports = verifyToken;