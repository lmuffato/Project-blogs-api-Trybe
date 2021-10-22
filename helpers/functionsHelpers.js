const jwt = require('jsonwebtoken');
const userService = require('../services/users');

const verifyTokenValid = async (token, secret) => {
 try {
  const tokenDecripted = jwt.verify(token, secret);
  console.log(tokenDecripted);
  const user = await userService.getUserByEmail(tokenDecripted);

  return user;
 } catch (_err) {
   return {
     errorCode: 401,
     errorInfo: { message: 'Expired or invalid token' },
   };
 }
};

module.exports = {
  verifyTokenValid,
};