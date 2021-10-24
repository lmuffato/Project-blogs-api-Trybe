const jwt = require('jsonwebtoken');

const JWT_SECRET = 'senha';

module.exports = (req, _res, next) => {
  const token = req.headers.authorization;

  try {
  jwt.verify(token, JWT_SECRET);
  next();
  } catch (error) {
    error.message = 'Expired or invalid token';
    if (!token) error.message = 'Token not found';
    error.statusCode = 401;
    next(error);
  }
};