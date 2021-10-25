const jsonwebtoken = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

function generateToken(email, password) {
  const tokenBody = { email, password };
  const config = {
    algorithm: 'HS256',
    expiresIn: '2d',
  };
  return jsonwebtoken.sign(tokenBody, JWT_SECRET, config);
}

async function tokenValidation(authorization, request) {
  try {
    const tokenData = jsonwebtoken.verify(authorization, JWT_SECRET);
    const { email, password } = tokenData;
    const user = await User.findOne({ where: { email, password } });
    request.user = user;
    return !!user;
  } catch (error) {
    return false;
  }
}

module.exports = {
  generateToken,
  tokenValidation,
};