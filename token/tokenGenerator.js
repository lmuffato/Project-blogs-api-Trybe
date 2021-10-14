const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'supersenha';

const tokenGenerator = (user) => {
  const jwtConfig = {
    expiresIn: '15d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: user }, JWT_SECRET, jwtConfig);
  return token;
};

module.exports = {
  tokenGenerator,
};