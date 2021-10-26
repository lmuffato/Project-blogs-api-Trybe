const jwt = require('jsonwebtoken');
const { httpStatusCode } = require('../utils/errors');

const { SECRET } = process.env;

function validateToken(token) {
  if (!token) {
    return {
      status: httpStatusCode.unauthorized,
      message: 'Token not found',
    };
  }

  try {
    jwt.verify(token, SECRET);
  } catch (error) {
    return {
      status: httpStatusCode.unauthorized,
      message: 'Expired or invalid token',
    };
  }
}

module.exports = validateToken;