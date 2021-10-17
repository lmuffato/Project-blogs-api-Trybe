const {
  TITLE_IS_REQUIRED,
  CONTENT_IS_REQUIRED,
  CATEGORY_ID_CANNOT_BE_EDITED,
} = require('../utils/errorMessages');

const checkTitle = (title) => {
  if (!title) throw TITLE_IS_REQUIRED; 
};

const checkContent = (content) => {
  if (!content) throw CONTENT_IS_REQUIRED;
};

const checkCategoryId = (categoryIds) => {
  if (categoryIds) throw CATEGORY_ID_CANNOT_BE_EDITED;
};

const validateUserFields = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  checkTitle(title);
  checkContent(content);
  checkCategoryId(categoryIds);

  next();
};

module.exports = validateUserFields;
