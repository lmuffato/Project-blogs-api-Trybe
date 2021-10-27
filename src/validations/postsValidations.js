const { httpStatusCode, errors } = require('../utils/errors');
const categoriesModel = require('../models/categoriesModel');
const postsModel = require('../models/postsModel');

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

async function validateOwner(postId, userId) {
  const storagePost = await postsModel.findPost(postId);

  if (storagePost.userId !== userId) {
    return {
      status: httpStatusCode.unauthorized,
      message: 'Unauthorized user',
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

async function validatePostUpdateFields(post, postId, userId) {
  const response = validateTitle(post.title) 
  || validateContent(post.content)
  || validateCategoriesInUpdate(post.categoryIds)
  || await validateOwner(postId, userId);

  return response;
}

async function validatePostFields(title, content, categoryIds) {
  const response = validateTitle(title) 
    || validateContent(content)
    || await validadeCategoriesIds(categoryIds);

  return response;
}

module.exports = { validatePostFields, validatePostUpdateFields };
