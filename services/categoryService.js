const { Category } = require('../models');

const createCategory = async (name) => {
  const category = await Category.create({ name });

  return category;
};

const getAllCategories = async () => {
  const result = await Category.findAll({});
  return result;
};

module.exports = {
  createCategory,
  getAllCategories,
};
