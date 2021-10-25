const { Category } = require('../models');
const categoriesValidations = require('./validations/categoriesValidations');
const userValidations = require('./validations/userValidations');

const addCategories = async (categories, token) => {
  userValidations.validateToken(token);
  userValidations.validateTokenRequired(token);
  categoriesValidations.validateName(categories.name);
  const result = await Category.create(categories);
  return { status: 201, response: result.dataValues };
};

module.exports = {
  addCategories,
};