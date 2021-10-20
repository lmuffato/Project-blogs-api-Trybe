const jsonwebtoken = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function generateToken(email, password) {
  const tokenBody = { email, password };
  const config = {
    algorithm: 'HS256',
    expiresIn: '2d',
  };
  return jsonwebtoken.sign(tokenBody, JWT_SECRET, config);
}

module.exports = {
  generateToken,
};