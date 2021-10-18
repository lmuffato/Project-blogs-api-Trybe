const { Category } = require('../../models');
const error = require('../utils/errorsObject');

const createCategory = async (name) => {
  if (!name) throw error.nameRequired;
  const result = await Category.create({ name });
  return result;
};

module.exports = {
  createCategory,
};