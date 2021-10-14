const { Category } = require('../models');
const Joi = require('../Joi/templates');

const createCategory = async (name) => {
  const { error } = Joi.Category.validate({ name });

  if (error) return { code: 400, message: error.details[0].message };

  const result = await Category.create({ name });
  return result;
};

module.exports = {
  createCategory,
};