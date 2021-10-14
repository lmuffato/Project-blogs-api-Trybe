const { Categories } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Categories.create({ name });
  return { status: 201, data: newCategory };
};

const getCategories = async () => {
  const allCatedories = await Categories.findAll();
  return { status: 200, data: allCatedories };
};

module.exports = {
  getCategories,
  createCategory,
};
