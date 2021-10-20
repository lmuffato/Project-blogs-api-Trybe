const AppError = require('../../utils/AppError');
const categoryService = require('../categoryService');

const validateTitle = (title) => {
  if (!title) {
    throw new AppError(400, '"title" is required');
  }

  return true;
};

const validateContent = (content) => {
  if (!content) {
    throw new AppError(400, '"content" is required');
  }

  return true;
};

const validateCategoryId = (categoryIds) => {
  if (!categoryIds) {
    throw new AppError(400, '"categoryIds" is required');
  }

  return true;
};

const verifyCategories = async (categoryIds) => {
  const categoriesMapped = await Promise.all(categoryIds.map(categoryService.getOne));

  if (categoriesMapped.includes(null)) {
    throw new AppError(400, '"categoryIds" not found');
  }

  return true;
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryId,
  verifyCategories,
};
