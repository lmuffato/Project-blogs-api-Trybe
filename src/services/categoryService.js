const { Category } = require('../models');
const categorySchema = require('../utils/schemas/categorySchema');

const create = async (name) => {
  const validateCategory = categorySchema.categoryValidations(name);
  if (validateCategory.message) return validateCategory;

  const category = await Category.create({ name });
  return { status: 201, category };
};

const getAll = async () => {
  const categories = await Category.findAll();
  if (!categories) return { status: 404, message: 'Categories not found' };

  return { status: 200, categories };
};

module.exports = {
  create,
  getAll,
};