const validateOwner = require('./validateOwner');
const validateTitle = require('./validateTitle');
const validateContent = require('./validateContent');
const { validadeCategoriesIds, validateCategoriesInUpdate } = require('./validateCategoriesIds');

async function validatePostUpdateFields(post, postId, userId) {
  const response = validateTitle(post.title)
  || validateContent(post.content)
  || validateCategoriesInUpdate(post.categoryIds)
  || await validateOwner(postId, userId);

  if (response) {
    return response;
  }
}

async function validatePostFields(title, content, categoryIds) {
  const response = validateTitle(title) 
    || validateContent(content)
    || await validadeCategoriesIds(categoryIds);

  return response;
}

module.exports = { validatePostFields, validatePostUpdateFields };
