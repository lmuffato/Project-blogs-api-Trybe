const { Blogpost } = require('../../models');
const { status } = require('../utils');

const addBlogPost = async (userId, title, content) => {
  const createBlogPost = await Blogpost.create({ userId, title, content });
  const { dataValues: blogPost } = createBlogPost;
  
  return { code: status.HTTP_STATUS_CREATED, blogPost };
};

const getAllPosts = async () => {
  const allPosts = await Blogpost.findAll({ include: { all: true } });
  return {
    code: status.HTTP_STATUS_OK,
    allPosts,
  };
};

module.exports = {
  addBlogPost,
  getAllPosts,
};