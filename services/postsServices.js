const { Op } = require('sequelize');
const { BlogPosts, Users } = require('../models');

/* const criarPosts = async (post) => {
  const criarPost = await BlogPosts.create(post);
  return criarPost;
}; */

const existeCategorias = async (categoryIds) => {
  const existe = await Users.findAll({ where: { id: { [Op.in]: categoryIds } } });
  if (existe.length === categoryIds.length) return true;
  return false;
};

const criarPosts = async (dadosPost, userId = 1) => {
  const { title, content, categoryIds } = dadosPost;
  const categories = await existeCategorias(categoryIds);
  if (!categories) return 'não existe';
  await BlogPosts.create({ title, content, userId });
  const postagem = await BlogPosts.findOne({ where: { title, content, userId } });
  return postagem;
};

module.exports = {
  criarPosts,
};