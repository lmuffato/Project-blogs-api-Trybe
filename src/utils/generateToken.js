require('dotenv/config');
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

function generateToken(id) {
  return jwt.sign({ id }, SECRET, {
    expiresIn: 86400,
  });
}

module.exports = generateToken;