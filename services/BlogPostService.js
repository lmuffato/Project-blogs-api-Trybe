const { BlogPosts, User } = require('../models');

const createPost = async (post, email) => {
  const { id } = await User.findOne({ where: { email } });
  const { title, content } = post;
  const newPost = await BlogPosts
    .create({ title, content, userId: id, published: new Date(), updated: new Date() });
  return { status: 201, data: newPost };
};

module.exports = {
  createPost,
};
