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

const getPostById = async (id) => {
  const myPost = await BlogPosts.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!myPost) return { status: 404, message: 'Post does not exist' };

  return { status: 200, data: myPost };
};

module.exports = {
  getPostById,
  getPosts,
  createPost,
};
