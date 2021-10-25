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

const getCategories = async (token) => {
  userValidations.validateToken(token);
  userValidations.validateTokenRequired(token);
  const categories = await Category.findAll();
  const response = categories.map((category) => {
    const { dataValues } = category;
    return dataValues;
  });
  return { status: 200, response };
};

module.exports = {
  addCategories,
  getCategories,
};