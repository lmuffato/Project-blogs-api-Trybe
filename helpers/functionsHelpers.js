const jwt = require('jsonwebtoken');
const userService = require('../services/users');

const verifyTokenValid = async (token, secret) => {
  const tokenDecripted = jwt.verify(token, secret);
  console.log('console.log do tokenDecripted', tokenDecripted);
  // const user = await userService.getUserByEmail(tokenDecripted.email);
  console.log(tokenDecripted);
  return tokenDecripted;
};

module.exports = {
  verifyTokenValid,
};