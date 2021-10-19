const AppError = require('../../utils/AppError');

const validateName = (name) => {
  if (!name) {
    throw new AppError(400, '"name" is required');
  }

  return true;
};

module.exports = {
  validateName,
};
