const { Categories } = require('../models');

const criarCategories = async (name) => {
  const categories = await Categories.create(name);
  return categories;
};

const buscarCategories = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  criarCategories,
  buscarCategories,
};