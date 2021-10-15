const { Category } = require('../models');
const error = require('./error');

const createCategory = async ({ name }) => {
  if (!name) return error.requiredName;
  
  if (name) {
    const newCategory = await Category.create({ name });
    return newCategory;
  }
  };

  const getAllCategories = async () => {
    const result = await Category.findAll();
    return result;
  };

module.exports = {
  createCategory,
  getAllCategories,
}; 