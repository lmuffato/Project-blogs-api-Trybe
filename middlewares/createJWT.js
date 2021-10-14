const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'SuperSenhaAtivar';

const createToken = (user) => {
  const { password: _, ...payload } = user;
  const jwtConfig = {
    algorithm: 'HS256',
    expiresIn: '10d',
  };
  const token = jwt.sign(payload, secret, jwtConfig);

  return { token };
};

module.exports = {
  createToken,
};
