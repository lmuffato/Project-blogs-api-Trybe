const jwt = require('jsonwebtoken');
const SECRET = require('../services/secret');

const verifyToken = (token) => jwt.verify(token, SECRET, (err, _decoded) => {
  if (err) return false;

  return true;
});

module.exports = { verifyToken };