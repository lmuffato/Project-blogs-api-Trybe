const { BlogPost } = require('../models');

const createPost = async (data) => {
  const newPost = await BlogPost.create(data);
  return { status: 201, data: newPost };
};

module.exports = {
  createPost,
};
