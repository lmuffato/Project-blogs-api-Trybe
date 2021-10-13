const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const secret = 'secret';
const HTTP_STATUS_CREATED = 201;

const generateToken = (data) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  return ({
    code: HTTP_STATUS_CREATED,
    token,
  });
};

module.exports = {
  generateToken,
};