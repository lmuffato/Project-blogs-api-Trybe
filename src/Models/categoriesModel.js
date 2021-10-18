const { Category } = require('../../models');
const { status } = require('../utils');

const addCategories = async (name) => {
  const createCategory = await Category.create({ name });
  const { dataValues: category } = createCategory;
  return { code: status.HTTP_STATUS_CREATED, category };
};

const getCategories = async () => {
  const categories = await Category.findAll();
  return {
    code: status.HTTP_STATUS_OK,
    categories,
  };
};

const checkCategoryExists = async (categoryIds) => {
  const exists = await Category.findOne({ where: { id: categoryIds } });

  if (!exists) return { code: status.BAD_REQUEST, message: status.CATEGORY_NOT_FOUND };
};

module.exports = {
  addCategories,
  getCategories,
  checkCategoryExists,
};