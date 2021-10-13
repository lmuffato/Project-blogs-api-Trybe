const { Category } = require('../models');

const createCategory = async ({ name }) => {
  console.log(name);
  const newCategory = await Category.create({ name });

  return newCategory;
};

const findAllCategories = async () => Category.findAll();

module.exports = {
  createCategory,
  findAllCategories,
};
