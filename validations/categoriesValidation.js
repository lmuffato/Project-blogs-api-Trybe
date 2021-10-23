const CustomError = require('../utils/CustomError');

const validateName = (name) => {
  if (!name) throw new CustomError(400, '"name" is required');
};

module.exports = {
  validateName,
};
