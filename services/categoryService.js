const { Category } = require('../models');

const createCategoryS = async (newCat) => {
  console.log('--------- CREATE CATEGORIES ----------');
  const category = await Category.create(newCat);
  return category;
};

module.exports = {
  createCategoryS,
};