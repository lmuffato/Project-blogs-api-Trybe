const jwt = require('jsonwebtoken');
const { getStatusCode } = require('../../utils/statusCode');
const { throwError } = require('../../utils/error');

const { JWT_SECRET } = process.env;

const jwtconfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

function getToken(email) {
  const token = jwt.sign({ email }, JWT_SECRET, jwtconfig);
  return token;
}

function verifyToken(token) {
  try {
    if (!token) {
      const error = new Error('Token not found');
      error.nullToken = true;
      throw error;
    }

    const user = jwt.verify(token, JWT_SECRET);

    return user;
  } catch ({ nullToken, message }) {
    const errorMessage = nullToken ? message : 'Expired or invalid token';
    throwError('unauthorized', errorMessage, getStatusCode);
  }
}

module.exports = {
  getToken,
  verifyToken,
};
