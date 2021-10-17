const { Categories } = require('../models');

const createCategories = async (name) => {
  const categories = await Categories.create(name);
  return categories;
};

module.exports = {
  createCategories,
};
