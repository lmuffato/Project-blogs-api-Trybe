const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('../utils/statusCode');
require('dotenv').config();

const authMiddleware = async (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return next({ status: UNAUTHORIZED, message: 'Token not found' });
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    if (error) {
      return next({
        status: UNAUTHORIZED,
        message: 'Expired or invalid token',
      });
    }
  }
};

module.exports = authMiddleware;