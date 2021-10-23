const CustomError = require('../utils/CustomError');
const { Categories } = require('../models');

const validateTitle = (title) => {
  if (!title) throw new CustomError(400, '"title" is required');
};

const validateCategoryIds = async (categoryIds) => {
  if (!categoryIds) throw new CustomError(400, '"categoryIds" is required');

  /*
  categoryIds.forEach(async (category) => {
    const response = await Categories.findByPk(category);
    if (!response) {
      throw new CustomError(400, '"categoryIds" not found');
    }
  });
  */

  const response = await Categories.findByPk(categoryIds[0]);
  if (!response) throw new CustomError(400, '"categoryIds" not found');
};

const validateContent = (content) => {
  if (!content) throw new CustomError(400, '"content" is required');
};

module.exports = {
  validateTitle,
  validateCategoryIds,
  validateContent,
};
