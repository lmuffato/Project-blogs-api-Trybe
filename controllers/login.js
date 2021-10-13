const userService = require('../services/user');

const makeLogin = async (req, res) => {
  const { email, password } = req.body;
  const { message, token } = await userService.askLogin(email, password);
  if (token) {
    return res.status(200).json({ token });
  }
  return res.status(400).json({ message });
};

// const userAuthentication = (req, res, next) => {
//   const token = req.headers.authorization;
//   if (!token) {
//     return res.status(401).json({ message: 'missing auth token' });
//   }
//   const dataToken = validateToken(token);
//   if (!dataToken.isValid) {
//    return res.status(401).json({ message: 'jwt malformed' });
//   }
//   req.user = dataToken.user;
//   next();
// };

module.exports = { makeLogin };