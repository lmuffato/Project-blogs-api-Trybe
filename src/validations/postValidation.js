const jwt = require('jsonwebtoken');
const { Category } = require('../models');
require('dotenv').config();

const titleIsRequired = {
  status: 400,
  error: {
    message: '"title" is required',
  },
};

const contentIsRequired = {
  status: 400,
  error: {
    message: '"content" is required',
  },
};

const categoryIdIsRequired = {
  status: 400,
  error: {
    message: '"categoryIds" is required',
  },
};

const categoryIdNotFound = {
  status: 400,
  error: {
    message: '"categoryIds" not found',
  },
};

const tokenNotFound = {
  status: 401,
  error: {
    message: 'Token not found',
  },
};

const tokenInvalid = {
  status: 401,
  error: {
    message: 'Expired or invalid token',
  },
};

const postNotFound = {
  status: 404,
  error: {
    message: 'Post does not exist',
  },
};

const validatePostTitle = (title) => {
  if (!title) throw titleIsRequired;
};

const validatePostContent = (content) => {
  if (!content) throw contentIsRequired;
};

const validatePostCategory = async (categoryIds) => {
  if (!categoryIds) throw categoryIdIsRequired;
  const categoryResult = await Category.findAll();
  const listCategories = categoryResult.map((category) => {
    const { dataValues } = category;
    return dataValues.id;
  });
  const categories = categoryIds.every((Id) => listCategories.includes(Id));
  if (!categories) throw categoryIdNotFound;
};

const validateToken = (token) => {
  if (!token) throw tokenNotFound;
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    return email;
  } catch (err) {
    throw tokenInvalid;
  }
};

const validatePostExists = (post) => {
  if (!post) throw postNotFound;
};

module.exports = {
  validatePostTitle,
  validatePostContent,
  validatePostCategory,
  validateToken,
  validatePostExists,
};
