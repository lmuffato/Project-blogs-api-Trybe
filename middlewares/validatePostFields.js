const errorMessage = require('../utils/errorMessages');

const checkTitle = (title) => {
  if (!title) throw errorMessage.TITLE_IS_REQUIRED; 
};

const checkContent = (content) => {
  if (!content) throw errorMessage.CONTENT_IS_REQUIRED;
};

const checkCategoryId = (categoryId) => {
  if (!categoryId) throw errorMessage.CATEGORYID_IS_REQUIRED;
  if (!Array.isArray(categoryId)) throw errorMessage.CATEGORYID_MUST_BE_ARRAY;
};

const validateUserFields = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  checkTitle(title);
  checkContent(content);
  checkCategoryId(categoryIds);

  next();
};

module.exports = validateUserFields;
