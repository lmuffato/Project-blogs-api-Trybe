const { Category } = require('../models');

const createCategory = async (addCategory) => {
  const categories = await Category.create(addCategory);
  return categories;
};

module.exports = { createCategory };