// const jwt = require('jsonwebtoken');
// const userModel = require('../Models/usersModels');

// const secret = process.env.JWT_SECRET;
// const ERROR_MESSAGE = 'jwt malformed';
// const ERROR_TOKEN = 'missing auth token';
// const ERROR_USER = 'user not found';
// const HTTP_STATUS_UNAUTHORIZED = 401;

// module.exports = async (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(HTTP_STATUS_UNAUTHORIZED).json({ message: ERROR_TOKEN });
//   }
//   try {
//     const decoded = jwt.verify(token, secret);
//     const { data } = decoded;
//     const { _id, email, role } = data;
//     const userVerify = await userModel.checkEmailExists(email);

//     if (!userVerify) {
//       return res.status(HTTP_STATUS_UNAUTHORIZED).json({ message: ERROR_USER });
//     }
//     req.user = _id;
//     req.userRole = role;

//     return next();
//   } catch (err) {
//     return res.status(HTTP_STATUS_UNAUTHORIZED).json({ message: ERROR_MESSAGE });
//   }
// };