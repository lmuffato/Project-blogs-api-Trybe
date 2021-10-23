const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const existingCategory = await Category.findOne({ where: { name } });
      
  if (existingCategory) {
      return 'exists';
    }
  return Category.create({ name });
  };

const findAllCategory = async () => {
  const categories = await Category.findAll();
  
    if (categories === null) {
      return '!exists';
    }
    return categories;
  };
module.exports = { createCategory, findAllCategory };