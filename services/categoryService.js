const { Category } = require('../models');

const createCategoryS = async (newCat) => {
  console.log('--------- CREATE CATEGORIES ----------');
  const category = await Category.create(newCat);
  return category;
};

const getAllCategoriesS = async () => {
  const categories = await Category.findAll({ order: [['id', 'ASC']] });
  return categories;
};

module.exports = {
  createCategoryS,
  getAllCategoriesS,
};

// https://stackoverflow.com/questions/36259532/sequelize-findall-sort-order-in-nodejs