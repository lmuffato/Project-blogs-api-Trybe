const { Category } = require('../models');

const create = async (category) => {
  const newUser = await Category.create(category);
  return newUser;
};

module.exports = {
  create,
};