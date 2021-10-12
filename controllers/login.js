// const loginService = require('../services/loginService');
// const { validateToken } = require('../services/loginService');

// const makeLogin = async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(401).json({ message: 'All fields must be filled' });
//   }
//   const { status, response } = await loginService.askLogin(email, password);
//   return res.status(status).json(response);
// };

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

// module.exports = { makeLogin, userAuthentication };