const joi = require('@hapi/joi');
const { Category } = require('../models');
const { addErro, validateToken } = require('../util');

const validateCategory = joi.object({
  name: joi.string().required(),
});

const findCategories = async (token) => {
  validateToken(token);

  const categories = await Category.findAll();

  return categories;
};

const createCategory = async (name, token) => {
  const { error } = validateCategory.validate({ name });

  if (error) {
    const { message } = error.details[0];
    throw addErro(message, 400);
  }

  validateToken(token);

  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
  findCategories,
};
