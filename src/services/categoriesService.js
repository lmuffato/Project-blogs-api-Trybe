const { Categories } = require('../models');

const createCategories = async ({ name }) => {
  const category = await Categories.create({ name });  

  return category;
};

module.exports = { createCategories };
