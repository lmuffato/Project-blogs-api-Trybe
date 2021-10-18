const AppError = require('../../utils/AppError');

const validateName = (displayName) => {
  if (!displayName || typeof displayName !== 'string' || displayName.length < 8) {
    throw new AppError(400, '"displayName" length must be at least 8 characters long');
  }

  return true;
};

const validatePassword = (password) => {
  if (!password) {
    throw new AppError(400, '"password" is required');
  }

  if (typeof password !== 'string' || password.length !== 6) {
    throw new AppError(400, '"password" length must be 6 characters long');
  }

  return true;
};

const validateEmail = (email) => {
  if (!email) throw new AppError(400, '"email" is required');

  return true;
};

module.exports = {
  validateName,
  validatePassword,
  validateEmail,
};
