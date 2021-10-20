const { Categories } = require('../models');

const createCategory = async (newCategory) => {
  const { dataValues } = await Categories.create(newCategory);

  return dataValues;
};

// const findCategories = async () => {
//   const categories = await Categories.findAll()
// };

module.exports = {
  createCategory,
  // findCategories,
};
