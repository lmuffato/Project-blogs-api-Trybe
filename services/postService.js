const { BlogPost } = require('../models');

const createPost = async (data) => {
  const result = await BlogPost.create(data);
  return result;
};

module.exports = {
  createPost,
};
