const { Categories } = require('../models');

const createCategorie = async (data) => {
  const newCategorie = Categories.create(data);
  return newCategorie;
};

const listCategories = async () => {
  const categories = await Categories.findAll();
  return categories;
};

module.exports = {
  createCategorie,
  listCategories,
};