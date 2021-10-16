// const { StatusCodes: { OK, BAD_REQUEST } } = require('http-status-codes');
const { BlogPost } = require('../models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  const result = await BlogPost.create({ 
    title,
    content,
    categoryIds,
    userId,
  });
  return result;
};

module.exports = {
  createPost,
};