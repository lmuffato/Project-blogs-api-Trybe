const { Op } = require('sequelize');
const { BlogPosts, Users } = require('../models');

const categoryExists = async (categoryIds) => {
  const exist = await Users.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (exist.length === categoryIds.length) return true;
  return false;
};

const createPost = async (dataPost, userId = 1) => {
  const { title, content, categoryIds } = dataPost;
  const category = await categoryExists(categoryIds);
  if (!category) return 'category not found';
  await BlogPosts.create({ title, content, userId });
  const posted = await BlogPosts.findOne({ where: { title, content, userId } });
  return posted;
};

const getPosts = async () => {
  const getPost = await BlogPosts.findAll({ include: [{ all: true }] });
  return getPost;
};

module.exports = {
  createPost,
  getPosts,
};
