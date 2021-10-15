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

module.exports = {
  addCategories,
  getCategories,
};