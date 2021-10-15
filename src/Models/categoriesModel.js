const { Category } = require('../../models');
const { status } = require('../utils');

const addCategories = async (name) => {
  const createCategory = await Category.create({ name });
  const { dataValues: category } = createCategory;
  return { code: status.HTTP_STATUS_CREATED, category };
};

module.exports = {
  addCategories,
};