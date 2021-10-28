const ERROR = require('../helpers/errors');
const { Category } = require('../models');

const create = async ({ name }) => {
  if (!!name === false) return ERROR.NAME_IS_REQUIRED;
  const { dataValues } = await Category.create({ name });
  return dataValues;
};

const getCategories = async () => {
  let categories = await Category.findAll();
  if (!categories) categories = [];
  return categories;
};

module.exports = {
  create,
  getCategories,
};
