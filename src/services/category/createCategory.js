const { Category } = require('../../models');
const CategorySchema = require('../../schemas/categories');

module.exports = async (newCategoryData) => {
  const { error } = CategorySchema.categoryValidations(newCategoryData);

  if (error) return { status: 400, message: error.details[0].message };

  const createdCategory = await Category.create(newCategoryData);
  return createdCategory;
};
