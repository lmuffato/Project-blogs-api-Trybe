const { BlogPost } = require('../../models');
const validateFcts = require('../utils/validateFunctions');

const createPost = async (title, categoryIds, content) => {
  validateFcts.validatePost({ title, categoryIds, content });
  const result = await BlogPost.create({ title, categoryIds, content });
  return result;
};

module.exports = {
  createPost,
};