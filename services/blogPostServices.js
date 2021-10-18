const { Op } = require('sequelize');
const { BlogPost, User } = require('../models');
const { ERROR_CATEGORY_NOT_FOUND } = require('../utils/errors');

const checkCategorie = async (categoryIds) => {
  const exist = await User.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (exist.length === categoryIds.length) return true;
  return false;
};

const create = async (dataPost, userId = 1) => {
  const { title, content, categoryIds } = dataPost;
  const category = await checkCategorie(categoryIds);
  if (!category) return ERROR_CATEGORY_NOT_FOUND.error.message;
  await BlogPost.create({ title, content, userId });
  const posted = await BlogPost.findOne({ where: { title, content, userId } });
  return posted;
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({ include: [{ all: true, nested: true }] });
  // source: https://sequelize.org/master/manual/eager-loading.html#including-everything - para incluir todos os models associados e aninhados.
  return allPosts;
};

module.exports = {
  create,
  getAllPosts,
};