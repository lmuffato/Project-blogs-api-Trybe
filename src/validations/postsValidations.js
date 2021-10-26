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

async function validadeCategoriesIds(categoriesIds) {
  if (categoriesIds) {
    const isNotValid = await Promise.all(
      categoriesIds.map((category) => categoriesModel.getOneCategory(category)),
      ).then((res) => res.some((categorie) => !categorie));
  
    if (isNotValid) {
      return {
        status: httpStatusCode.notFound,
        message: '"categoryIds" not found',
      }; 
    }
  }
  if (!categoriesIds) {
    return {
      status: httpStatusCode.badRequest,
      message: errors.requiredError('categoryIds'),
    };
  }
}

async function validatePostFields(title, content, categoriesIds) {
  const response = validateTitle(title) 
    || validateContent(content)
    || await validadeCategoriesIds(categoriesIds);

  return response;
}

module.exports = validatePostFields;
