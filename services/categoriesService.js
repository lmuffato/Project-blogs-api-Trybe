const { Categories } = require('../models');
const validations = require('../validations/categoriesValidation');

const createCategory = async (name) => {
  validations.validateName(name);
  const category = await Categories.create({ name });
  return ({ status: 201, message: category });
};

module.exports = {
  createCategory,
};
