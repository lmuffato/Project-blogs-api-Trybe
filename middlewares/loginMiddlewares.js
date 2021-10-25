const jwt = require('jsonwebtoken');

const SECRET = 'segredo';

const {
  // STATUS_OK,
  // STATUS_CREATE,
  STATUS_BAD_REQUEST,
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

const verifyCredentialsLogin = async (req, res, next) => {
  const { email, password } = req.body;
  if (email === '') {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"email" is not allowed to be empty' });
  }
  if (password === '') {
    return res.status(STATUS_BAD_REQUEST)
    .json({ message: '"password" is not allowed to be empty' });
  }
  if (!email) {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"email" is required' });
  }
  if (!password) {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"password" is required' });
  }

  next();
};

module.exports = {
  verifyToken,
  verifyCredentialsLogin,
};
