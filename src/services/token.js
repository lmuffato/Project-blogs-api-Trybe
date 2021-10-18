const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const tokenService = {
  generate: (payload) => jwt.sign({ payload }, SECRET),
  verify: (token) =>
    jwt.verify(token, SECRET, (err, decoded) => (err || decoded)),
};

module.exports = tokenService;
