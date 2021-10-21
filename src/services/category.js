const { Category } = require('../models');

const createCategory = async (name) => {
  const create = await Category.create({ name });
  return create;
};

const getCategories = async () => {
  const listCategories = await Category.findAll();
  return listCategories;
};

module.exports = {
  createCategory,
  getCategories,
};
