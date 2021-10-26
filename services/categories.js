const { Category } = require('../models');
const { CREATED, OK } = require('../utils/status');

const create = async (name) => {
  const category = await Category.create({ name });
  return {
    status: CREATED,
    message: category,
  };
};

const getAll = async () => {
  const categories = await Category.findAll();
  return {
    status: OK,
    message: categories.reverse(),
  };
};

module.exports = { create, getAll };
