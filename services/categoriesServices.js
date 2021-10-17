const { Categories } = require('../models');

const criarCategories = async (name) => {
  const categories = await Categories.create(name);
  return categories;
};

module.exports = {
  criarCategories,
};