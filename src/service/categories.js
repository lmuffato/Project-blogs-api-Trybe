const model = require('../../models/categories');
const Joi = require('../middleware/joi');

const createCategories = async (data) => { 
  const { error } = Joi.Categories.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const category = await model.Category(data);
  console.log(category);

  return { status: 201, data: category };
};

module.exports = {
  createCategories,
};