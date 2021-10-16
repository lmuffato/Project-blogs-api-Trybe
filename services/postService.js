const { BlogPost, User, Category } = require('../models');

const createPost = async (data) => {
  const result = await BlogPost.create(data);
  return result;
};

const findAllPosts = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = {
  createPost,
  findAllPosts,
};
