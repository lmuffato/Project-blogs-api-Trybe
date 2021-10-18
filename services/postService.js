const { BlogPosts } = require('../models');

const createPost = async (catTitle, catContent, catUserId) => { 
  const posts = await BlogPosts
    .create({ title: catTitle, content: catContent, userId: catUserId });
  const { id, userId, title, content } = posts.dataValues;
  return { id, userId, title, content };
};

module.exports = {
  createPost,
};
