const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const builtError = (code, message) => ({ code, message });

const generateToken = (data) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  return jwt.sign({ data }, secret, jwtConfig);
};

module.exports = {
  builtError,
  generateToken,
};
