const {
  verifyTitle,
  verifyContent,
  verifyCategoryIds,
  validateCategoryIds,
} = require('../validations/blogPostVerify');

const errors = {
  MISSING_TITLE: '"title" is required',
  MISSING_CONTENT: '"content" is required',
  MISSING_CATEGORY_ID: '"categoryIds" is required',
  INVALID_CATEGORY_ID: '"categoryIds" not found',
};
const status = {
  BAD_REQUEST: 400,
};

const blogPostValidations = async (title, content, categoryIds) => {
  switch (true) {
    case verifyTitle(title): return {
      status: status.BAD_REQUEST, message: errors.MISSING_TITLE,
    };
    case verifyContent(content): return {
      status: status.BAD_REQUEST, message: errors.MISSING_CONTENT,
    };
    case verifyCategoryIds(categoryIds): return {
      status: status.BAD_REQUEST, message: errors.MISSING_CATEGORY_ID,
    };
    case (await validateCategoryIds(categoryIds)): return {
      status: status.BAD_REQUEST, message: errors.INVALID_CATEGORY_ID,
    };
    default: return {};
  }
};

module.exports = {
  blogPostValidations,
};