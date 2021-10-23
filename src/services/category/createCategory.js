const { Category } = require('../../models');
const { categoryValidation } = require('../../middlewares/Categories');

const createCategory = async (category) => {
  const { name } = category;
  categoryValidation(name);
  const newCategory = await Category.create(category);

  return newCategory;
};

module.exports = createCategory;