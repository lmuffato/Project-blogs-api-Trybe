const { Category } = require('../models');
const { CREATED, OK, NOT_FOUND } = require('../utils/status');

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
    message: categories,
  };
};

const getOne = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) {
    return {
      status: NOT_FOUND,
      message: { message: 'Category does not exist' },
    };
  }
  return {
    status: OK,
    message: category,
  };
};
module.exports = { create, getAll, getOne };
