const jwt = require('jsonwebtoken');

const { getAllCategory } = require('./categoryService');

const { BlogPost, User, Category } = require('../models');

const secret = 'Nanii!!!';

const hasRequiredFields = (token, title, content, categoryIds) => {
  switch (true) {
    case !token: return { code: 'UNAUTHORIZED',
    err: { message: 'Token not found' } };

    case !title: return { code: 'BAD_REQUEST',
    err: { message: '"title" is required' } };

    case !content: return { code: 'BAD_REQUEST',
    err: { message: '"content" is required' } };

    case !categoryIds: return { code: 'BAD_REQUEST',
    err: { message: '"categoryIds" is required' } };

    default: return true;
  }
};

const addBlogPostValidations = async (token, title, content, categoryIds) => {
  const requiredFields = hasRequiredFields(token, title, content, categoryIds);

  const isValid = await requiredFields.err
  ? requiredFields
  : await getAllCategory(token)
    .then((categories) => categoryIds
      .every((categoryId) => categories
        .some(({ id }) => id === categoryId)))
    .catch((err) => {
      console.log(err.message);
      return { code: 'UNAUTHORIZED', err: { message: 'Expired or invalid token' } };  
    });
  
  if (isValid === false) {
    return { code: 'BAD_REQUEST', err: { message: '"categoryIds" not found' } };
  }

  return isValid;
};

const addBlogPost = async (token, title, content, categoryIds) => {
  const isValid = await addBlogPostValidations(token, title, content, categoryIds);
  if (isValid.err) return isValid;
  try {
    const { dataValues } = await BlogPost.create({ title, content, categoryIds });
    
    return dataValues;
  } catch (err) {
    console.log(err.message);
    return { code: 'SERVER_ERROR', err: { message: 'Algo deu errado' } };
  }
};

const getAllBlogPost = async (token) => {
  if (!token) return { code: 'UNAUTHORIZED', err: { message: 'Token not found' } };
  try {
    await jwt.verify(token, secret);
    return BlogPost.findAll({
      include: [{ model: User, as: 'user' },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
  } catch (err) {
    console.log(err.message);
    return { code: 'UNAUTHORIZED', err: { message: 'Expired or invalid token' } };
  }
};

module.exports = {
  addBlogPost,
  getAllBlogPost,
};
