const {
  // STATUS_OK,
  // STATUS_CREATE,
  STATUS_BAD_REQUEST,
  // STATUS_UNAUTHORIZED,
  // STATUS_NOT_FOUND,
  // STATUS_UNPROCESSABLE,
  STATUS_CONFLICT,
  // STATUS_NO_CONTENT,
} = require('../utils/httpStatus');

const { findByEmailS } = require('../services/userService');

const verifyDiplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(STATUS_BAD_REQUEST)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  return next();
};

const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!email) {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"email" is required' });
  }
  if (!emailPattern.test(email)) {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"email" must be a valid email' });
  }
  return next();
};

const verifyLengthPass = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(STATUS_BAD_REQUEST).json({ message: '"password" is required' });
  }
  if (password.length < 6) {
    return res.status(STATUS_BAD_REQUEST)
      .json({ message: '"password" length must be 6 characters long' });
  }
  return next();
};

const verifyEmailExists = (req, res, next) => {
  const { email } = req.body;
  if (findByEmailS(email)) {
    return res.status(STATUS_CONFLICT).json({ message: 'User already registered' });
  }
  return next();
};

module.exports = {
  verifyDiplayName,
  verifyEmail,
  verifyLengthPass,
  verifyEmailExists,
};