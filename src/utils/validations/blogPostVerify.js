const { Category } = require('../../models');

const verifyTitle = (title) => {
  if (!title) return true;
};

const verifyContent = (content) => {
  if (!content) return true;
};

const verifyCategoryIds = (categoryIds) => {
  if (!categoryIds) return true;
};

const validateCategoryIds = async (categoryIds) => {
  const category = await Category.findOne({ where: { id: categoryIds[0] } });
  if (!category) return true;
};

module.exports = {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
  validateCategoryIds,
};