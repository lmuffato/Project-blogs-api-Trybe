const jwt = require('jsonwebtoken');

const SECRET = 'segredo';

const {
  // STATUS_OK,
  // STATUS_CREATE,
  // STATUS_BAD_REQUEST,
  STATUS_UNAUTHORIZED,
  // STATUS_NOT_FOUND,
  // STATUS_UNPROCESSABLE,
  // STATUS_CONFLICT,
  // STATUS_NO_CONTENT,
} = require('../utils/httpStatus');

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, SECRET);
    req.user = payload;
    return next();
  } catch (_e) {
    return res.status(STATUS_UNAUTHORIZED).json({ message: 'invalid token' });
  }
};

module.exports = {
  verifyToken,
};
