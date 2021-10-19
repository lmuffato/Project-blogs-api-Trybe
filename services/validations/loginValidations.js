const AppError = require('../../utils/AppError');

const validateEmail = (email) => {
  if (email === null || email === undefined) {
    throw new AppError(400, '"email" is required');
  }

  if (email === '') {
    throw new AppError(400, '"email" is not allowed to be empty');
  }

  return true;
};

const validatePassword = (password) => {
  if (password === null || password === undefined) {
    throw new AppError(400, '"password" is required');
  }

  if (password === '') {
    throw new AppError(400, '"password" is not allowed to be empty');
  }

  return true;
};

module.exports = {
  validateEmail,
  validatePassword,
};
