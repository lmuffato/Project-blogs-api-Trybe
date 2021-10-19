const { blogPost } = require('../../models');
const validateFcts = require('../utils/validateFunctions');

const createPost = async (title, categoryIds, content) => {
  validateFcts.createPost(title, categoryIds, content);
  const result = await blogPost.create({ title, categoryIds, content });
  return result;
};

module.exports = {
  createPost,
};