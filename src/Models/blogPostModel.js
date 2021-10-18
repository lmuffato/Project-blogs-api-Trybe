const { Blogpost } = require('../../models');
const { status } = require('../utils');

const addBlogPost = async (userId, title, content) => {
  const createBlogPost = await Blogpost.create({ userId, title, content });
  const { dataValues: blogPost } = createBlogPost;
  
  return { code: status.HTTP_STATUS_CREATED, blogPost };
};

module.exports = {
  addBlogPost,
};