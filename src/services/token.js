const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  algorithm: 'HS256',
};

const tokenService = {
  generate: (payload) => jwt.sign({ data: payload }, SECRET, jwtConfig),
  verify: (token) =>
    jwt.verify(token, SECRET, (err, decoded) => (err || decoded)),
};

module.exports = tokenService;
