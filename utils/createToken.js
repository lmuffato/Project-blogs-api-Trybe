const jwt = require('jsonwebtoken');
require('dotenv').config();

const CreateToken = (payload) => {
  const SECRET = process.env.JWT_SECRET;
  const token = jwt.sign(payload, SECRET);
  return { token };
};

module.exports = CreateToken;