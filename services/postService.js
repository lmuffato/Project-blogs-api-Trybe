const { Post } = require('../models');

const create = async (postData, userId) => {
  const { title, content, categoryIds } = postData;
  const newPost = await Post.create({ title, content, categoryIds, userId });
  return { status: 201, data: newPost };
};

module.exports = {
  create,
};