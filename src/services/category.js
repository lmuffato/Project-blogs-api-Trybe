const { Category } = require('../models');

const createCategory = async (name) => {
  const create = await Category.create({ name });
  return create;
};

module.exports = {
  createCategory,
};
