const { Category } = require('../models');
const categorySchema = require('../utils/schemas/categorySchema');

const create = async (name) => {
  const validateCategory = categorySchema.categoryValidations(name);
  if (validateCategory.message) return validateCategory;

  const category = await Category.create({ name });
  return { status: 201, category };
};

module.exports = {
  create,
};