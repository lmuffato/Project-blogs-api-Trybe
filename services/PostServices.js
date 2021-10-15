const { BlogPosts } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPosts.create({ 
    title, content, categoryIds, userId, published: new Date(), updated: new Date() });
  return newPost;
};

module.exports = {
  createPost,
};