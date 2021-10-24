const jwt = require('jsonwebtoken');

const SECRET = 'segredo';

const createToken = (user) => {
  const config = {
    algorithm: 'HS256',
    expiresIn: '1d',
  };
  const { password: _, ...payload } = user;
  const token = jwt.sign(payload, SECRET, config);
  return token;
};

module.exports = {
  createToken,
};