// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// const SECRET = process.env.JWT_SECRET;

// function createToken(user) {
//   const { password: _, ...payload } = user;
//   const jwtConfig = {
//     algorithms: 'HS256',
//     expiresIn: '15d',
//   };
//   const token = jwt.sign({ data: payload }, SECRET, jwtConfig);
//   return { token };
// }

// module.exports = { createToken };