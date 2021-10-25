const jwt = require('jsonwebtoken');
const { ValidateError } = require('../utils');
const { UNAUTHORIZED } = require('../utils/statusCode');

require('dotenv').config();

const authMiddleware = (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(ValidateError(UNAUTHORIZED, 'Token not found'));
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = payload;
    next();
  } catch (_error) {
    next(ValidateError(UNAUTHORIZED, 'Expired or invalid token'));
  }
};

module.exports = authMiddleware;