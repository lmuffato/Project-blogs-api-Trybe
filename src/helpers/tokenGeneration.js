const jwt = require('jsonwebtoken');

const SECRET = 'segredo_mais_secreto';

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

module.exports = (data) => jwt.sign({ data }, SECRET, jwtConfig);