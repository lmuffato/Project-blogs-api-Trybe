const categoriesSchema = require('../schemas/categories');
const asyncEvery = require('./asyncEvery');

const filter = async (id) => {
  const categoryId = await categoriesSchema.categoryFindByPk(id);
  return categoryId.id === id;
};

module.exports = (arr) => asyncEvery(arr, filter);