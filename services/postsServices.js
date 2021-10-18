const { Op } = require('sequelize');
const { BlogPosts, Users } = require('../models');

const categoriesExist = async (categoryIds) => {
  const exist = await Users.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (exist.length === categoryIds.length) return true;
  return false;
};

const createPosts = async (data, userId = 1) => {
  const { title, content, categoryIds } = data;
  const categories = await categoriesExist(categoryIds);
  if (!categories) return 'dont exist';
  await BlogPosts.create({ title, content, userId });
  const post = await BlogPosts.findOne({ where: { title, content, userId } });
  return post;
};

module.exports = { createPosts };