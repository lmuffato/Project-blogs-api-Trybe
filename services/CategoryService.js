const { Categorie } = require('../models');

const createCategory = async ({ name }) => {
  if (name === undefined) return { code: 400, message: '"name" is required' };

  const newCategory = await Categorie.create({ name });

  return { newCategory };
};

module.exports = {
  createCategory,
};
