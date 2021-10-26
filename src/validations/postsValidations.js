const { httpStatusCode, errors } = require('../utils/errors');
const categoriesModel = require('../models/categoriesModel');

function validateTitle(title) {
  if (!title) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('title'),
    };
  }
}

function validateContent(content) {
  if (!content) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('content'),
    };
  }
}

async function validadeCategoriesIds(categoryIds) {
  if (categoryIds) {
    const isNotValid = await Promise.all(
      categoryIds.map((category) => categoriesModel.getOneCategory(category)),
      ).then((res) => res.some((categorie) => !categorie));
  
    if (isNotValid) {
      return {
        status: httpStatusCode.badRequest,
        message: '"categoryIds" not found',
      }; 
    }
  }
  if (!categoryIds) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('categoryIds'),
    };
  }
}

async function validatePostFields(title, content, categoryIds) {
  const response = validateTitle(title) 
    || validateContent(content)
    || await validadeCategoriesIds(categoryIds);

  return response;
}

module.exports = validatePostFields;
