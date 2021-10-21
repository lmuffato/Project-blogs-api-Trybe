const { Category } = require('../models');

const createCategory = async (newCategory) => {
  const { dataValues } = await Category.create(newCategory);

  return dataValues;
};

const findCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  createCategory,
  findCategories,
};
