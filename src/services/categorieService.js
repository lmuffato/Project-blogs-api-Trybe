const { Category } = require('../models');

const create = async (category) => {
  const newCategory = await Category.create(category);
  return newCategory;
};

const listAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  create,
  listAllCategories,
};