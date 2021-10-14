// const { StatusCodes: { OK, BAD_REQUEST } } = require('http-status-codes');
const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const result = await Category.create({ name });
  return result;
};

module.exports = {
  createCategory,
};