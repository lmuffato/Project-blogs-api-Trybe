// const { StatusCodes: { OK, BAD_REQUEST } } = require('http-status-codes');
const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const result = await Category.create({ name });
  return result;
};

const findAllCategories = async () => {
  const result = await Category.findAll();
  return result;
};

module.exports = {
  createCategory,
  findAllCategories,
};