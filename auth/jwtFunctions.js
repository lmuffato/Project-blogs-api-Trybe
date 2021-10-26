const jwt = require('jsonwebtoken');

require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

const create = (payload) => {
  const token = jwt.sign(payload, SECRET);
  return token;
};

const verify = (token) => {
  const payload = jwt.verify(token, SECRET);
  return payload;
};

module.exports = {
  create,
  verify,
};