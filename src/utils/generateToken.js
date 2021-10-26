require('dotenv/config');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function generateToken(id) {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: 86400,
  });
}

module.exports = generateToken;