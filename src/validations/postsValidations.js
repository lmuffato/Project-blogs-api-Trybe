const categoriesModel = require('../models/categoriesModel');
const { httpStatusCode, errors } = require('../utils/errors');

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

function validadeCategoriesIds(categoriesIds) {
  if (!categoriesIds) {
    return {
      status: 422,
      message: '"categoryIds" is required',
    };
  }

  if (categoriesIds.length > 0) {
    categoriesIds.forEach(async (category) => {
      const findCategory = await categoriesModel.getOneCategory(category);

      if (findCategory) {
        return {
          status: 410,
          message: 'sem categoria',
        };
      }
    });
  }
}

function validatePostFields(title, content, categoriesIds) {
  const response = validateTitle(title) 
  || validateContent(content)
  || validadeCategoriesIds(categoriesIds);

  return response;
}

module.exports = validatePostFields;