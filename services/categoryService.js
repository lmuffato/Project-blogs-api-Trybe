const { Category } = require('../models');

const postCategorie = async ({ name }) => {
  if (typeof name === 'undefined' || !name) {
    return {
      code: 400,
      message: '"name" is required',
    };
  }
  const categorie = await Category.create({ name });
  return categorie;
};

const getCategory = async () => {
  const categorie = await Category.findAll();
  return categorie;
};

module.exports = { postCategorie, getCategory };
