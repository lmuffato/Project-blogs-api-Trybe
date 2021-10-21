const { Category } = require('../../models');
const Joi = require('../middleware/joi');

const createCategories = async (data) => { 
  const { error } = Joi.Categories.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const category = await Category.create(data);

  return { status: 201, data: category };
};

module.exports = {
  createCategories,
};