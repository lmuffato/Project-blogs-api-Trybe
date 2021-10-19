const { Categorie } = require('../models');

const createCategory = async ({ name }) => {
  if (name === undefined) return { code: 400, message: '"name" is required' };

  const newCategory = await Categorie.create({ name });

  return { newCategory };
};

const listCategories = async () => {
  const list = await Categorie.findAll();
  return list;
};

module.exports = {
  createCategory,
  listCategories,
};
