const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const UNAUTHORIZED_STATUS = 401;

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;

  if (!token) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (_e) {
    return res.status(UNAUTHORIZED_STATUS).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
