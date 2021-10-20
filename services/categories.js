const { Category } = require('../models');
const joi = require('../middlewares/schema');

async function createCategories(data) {
  const { error } = joi.Categories.validate(data);
  if (error) {
    return { status: 400, message: error.details[0].message };
  }
  const category = await Category.create(data);
  return { status: 201, data: category };
}

module.exports = { createCategories };