const { BlogPosts, User, Categories } = require('../models');

const createPost = async (post, email) => {
  const { id } = await User.findOne({ where: { email } });
  const { title, content } = post;
  const newPost = await BlogPosts
    .create({ title, content, userId: id, published: new Date(), updated: new Date() });
  return { status: 201, data: newPost };
};

const getPosts = async () => {
  const data = await BlogPosts.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data };
};

module.exports = {
  getPosts,
  createPost,
};
