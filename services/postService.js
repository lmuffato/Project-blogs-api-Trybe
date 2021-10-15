const { BlogPost, Category } = require('../models');

const create = async (data) => {
  const newPost = await BlogPost.create(data);
  return newPost;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({ include: [{ all: true }] });
  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [{ all: true }] });
  return post;
};

module.exports = {
  create,
  getCategoryById,
  getAllPosts,
  getPostById,
}; 