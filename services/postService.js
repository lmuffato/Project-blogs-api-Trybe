const { BlogPosts } = require('../models');
const validation = require('../validations/postValidation');

const createPost = async (title, categoryIds, content, userId) => {
  validation.validateTitle(title);
  validation.validateContent(content);
  await validation.validateCategoryIds(categoryIds);
  const post = await BlogPosts.create({ userId, title, categoryIds, content });

  return ({ status: 201, message: post });
};

module.exports = {
  createPost,
};
