const jwt = require('jsonwebtoken');

const verifyTokenValid = async (token, secret) => {
  const tokenDecripted = jwt.verify(token, secret);

  return tokenDecripted;
};

module.exports = {
  verifyTokenValid,
};