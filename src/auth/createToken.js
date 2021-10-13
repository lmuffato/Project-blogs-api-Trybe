const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createToken = (user) => {
  const { id, email, role } = user;
  const payload = { id, email, role };
  const jwtConfig = {
    expiresIn: '14d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, jwtConfig);
  return { token };
};

module.exports = { createToken };