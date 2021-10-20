const { BlogPost } = require('../models');

exports.create = async ({ title, content, categoryIds, userId }) => {
  const newPost = await BlogPost.create({ title, content, categoryIds, userId });

  return newPost;
};
