const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtconfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function getToken(email) {
  const token = jwt.sign({ email }, JWT_SECRET, jwtconfig);
  return token;
}

// function verifyToken(token) {
//   try {
    
//   } catch (error) {
    
//   }
// }

module.exports = {
  getToken,
};
