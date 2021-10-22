const { Category } = require('../models');

const createCategory = async ({ name }) => {
  console.log('service', name);
    const existingCategory = await Category.findOne({ where: { name } });
      
    if (existingCategory) {
      return 'exists';
    }
    return Category.create({ name });
  };
module.exports = { createCategory };