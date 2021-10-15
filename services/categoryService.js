const { Category } = require('../models');

const createCategory = async (name) => {
  // console.log(name, 'SERVICE');
  const result = await Category.create({ name });
  // console.log(result, 'de SERVICE');
  return result;
};

module.exports = {
  createCategory,
};