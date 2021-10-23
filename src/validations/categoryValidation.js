// const { Category } = require('../models');

const nameIsRequired = {
  status: 400,
  error: {
    message: '"name" is required',
  },
};

const validateCategory = (name) => {
  if (!name) throw nameIsRequired;
};

module.exports = {
  validateCategory,
};
