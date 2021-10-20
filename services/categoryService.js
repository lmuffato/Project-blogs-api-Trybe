const { Categories } = require('../models');

const createCategory = async (name) => {
  const result = await Categories.create({ name });
  return result;
};

module.exports = { createCategory };