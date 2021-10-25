const jwt = require('jsonwebtoken');
require('dotenv').config();

const CreateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET);
  return token;
};

module.exports = CreateToken;