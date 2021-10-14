const { Category } = require('../models');

const createCategory = async (addCategory) => {
  const categories = await Category.create(addCategory);
  return categories;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = { createCategory, getAllCategories };