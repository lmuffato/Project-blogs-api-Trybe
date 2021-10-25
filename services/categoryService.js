const { Category } = require('../models');

const createCategoryS = async (newCat) => {
  // ISSO NAO TA CONSEGUINDO RETORNAR NADA!
  const category = await Category.create(newCat);
  return category;
};

module.exports = {
  createCategoryS,
};