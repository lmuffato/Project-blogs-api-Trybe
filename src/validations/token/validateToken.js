const jwt = require('jsonwebtoken');
const httpStatusCode = require('../../utils/httpStatusCode');

const { JWT_SECRET } = process.env;

function validateToken(token) {
  if (!token) {
    return {
      status: httpStatusCode.unauthorized,
      message: 'Token not found',
    };
  }

  const decodedJson = jwt.decode(token, JWT_SECRET);

  if (!decodedJson || !decodedJson.id) {
    return {
      status: httpStatusCode.unauthorized,
      message: 'Expired or invalid token',
    };
  }

  return decodedJson;
}

module.exports = validateToken;
