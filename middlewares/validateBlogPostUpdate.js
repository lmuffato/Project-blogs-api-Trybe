const errorMessage = require('../utils/errorMessages');

const checkTitle = (title) => {
  if (!title) throw errorMessage.TITLE_IS_REQUIRED; 
};

const checkContent = (content) => {
  if (!content) throw errorMessage.CONTENT_IS_REQUIRED;
};

const checkCategoryId = (categoryIds) => {
  if (categoryIds) throw errorMessage.CATEGORY_ID_CANNOT_BE_EDITED;
};

const validateUserFields = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  checkTitle(title);
  checkContent(content);
  checkCategoryId(categoryIds);

  next();
};

module.exports = validateUserFields;
