const {
  TITLE_IS_REQUIRED,
  CONTENT_IS_REQUIRED,
  CATEGORY_ID_IS_REQUIRED,
  CATEGORY_ID_MUST_BE_ARRAY,
} = require('../utils/errorMessages');

const checkTitle = (title) => {
  if (!title) throw TITLE_IS_REQUIRED; 
};

const checkContent = (content) => {
  if (!content) throw CONTENT_IS_REQUIRED;
};

const checkCategoryId = (categoryId) => {
  if (!categoryId) throw CATEGORY_ID_IS_REQUIRED;
  if (!Array.isArray(categoryId)) throw CATEGORY_ID_MUST_BE_ARRAY;
};

const validateUserFields = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  checkTitle(title);
  checkContent(content);
  checkCategoryId(categoryIds);

  next();
};

module.exports = validateUserFields;
