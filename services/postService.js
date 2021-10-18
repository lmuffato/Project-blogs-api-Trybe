const { Post, User, Category } = require('../models');

const create = async (postData, userId) => {
  const { title, content, categoryIds } = postData;
  const newPost = await Post.create({ title, content, categoryIds, userId });
  return { status: 201, data: newPost };
};

const getAll = async () => {
  const posts = await Post.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: posts };
};

const getById = async (id) => {
  const post = await Post.findByPk(id, { 
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: post };
};

module.exports = {
  create,
  getAll,
  getById,
};