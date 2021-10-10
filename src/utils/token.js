require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const createToken = (payload) => {
  const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ payload }, JWT_SECRET, jwtConfig);

  return token;
};

const verifyToken = (token) => {
  const decode = jwt.verify(token, JWT_SECRET);

  return decode;
};

module.exports = { createToken, verifyToken };
