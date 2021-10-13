const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.SECRET_JWT || 'notsecretanymore';

const newToken = (obj) => {
  const { email, password } = obj;

  const payload = {
    email,
    password,
  };

  const JWT_CONFIG = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };

  const token = jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
  return token;
};

module.exports = {
  newToken,
};
