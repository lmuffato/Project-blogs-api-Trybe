const { Category } = require('../../../models');
const errors = require('../../utils/errors');
const httpStatusCode = require('../../utils/httpStatusCode');

async function validadeCategoriesIds(categoryIds) {
  if (categoryIds) {
    const isNotValid = await Promise.all(
      categoryIds.map((category) => Category.findByPk(category)),
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

function validateCategoriesInUpdate(categoryIds) {
  if (categoryIds !== undefined) {
    return {
      status: httpStatusCode.badRequest,
      message: 'Categories cannot be edited',
    };
  }
}

module.exports = { validadeCategoriesIds, validateCategoriesInUpdate };