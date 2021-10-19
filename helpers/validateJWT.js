const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'minhasupersenha';

const genToken = ({ id, displayName, email, image }) => {
  const token = jwt.sign({ id, displayName, email, image }, secret);
  return token;
};

const verifyToken = (token) => {
  try {
    jwt.verify(token, secret);
  } catch (err) {
    console.error(err);
  }
};

const decodeToken = (token) => jwt.decode(token);

module.exports = {
  genToken,
  verifyToken,
  decodeToken,
};