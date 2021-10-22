const { Post, User, Category } = require('../models');

const getAllPosts = async () => {
  const posts = await Post.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, data: posts };
};

const getPostById = async (id) => {
  const post = await Post.findByPk(id, { 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return { status: 404, message: 'Post does not exist' };
  }

  return { status: 200, data: post };
};

module.exports = {
  getAllPosts,
  getPostById,
};
