const { Category } = require('../models');

const CATEGORY_REQUIRED = {
  code: 400,
  message: '"categoryIds" is required',
};

const TITLE_REQUIRED = {
  code: 400,
  message: '"title" is required',
};

const CONTENT_REQUIRED = {
  code: 400,
  message: '"content" is required',
};

const EXISTS_CATEGORY = {
  code: 400,
  message: '"categoryIds" not found',
};

const validateInfos = (title, content, categoryIds) => {
  if (!categoryIds) return CATEGORY_REQUIRED;
  if (!title) return TITLE_REQUIRED;
  if (!content) return CONTENT_REQUIRED;
};

const existCategory = async (categoryIds) => {
  const allCategories = await Category.findAll({ where: { id: categoryIds } });
  if (allCategories.length !== categoryIds.length) return EXISTS_CATEGORY;
};

const createPost = async (title, content, categoryIds) => {
  const isValid = validateInfos(title, content, categoryIds);
  if (isValid) return isValid;
  const exists = await existCategory(categoryIds);
  if (exists) return exists;
};

module.exports = { createPost };
