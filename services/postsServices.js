const { Op } = require('sequelize');
const { BlogPosts, Users } = require('../models');

const existeCategorias = async (categoryIds) => {
  // Sobre Operators do Sequelize:
  // https://sequelize.org/master/manual/model-querying-basics.html#operators
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

const buscarPosts = async () => {
  const buscar = await BlogPosts.findAll({ include: [{ all: true }] });
  return buscar;
};

/* const getAll = async () => {
  const blogPosts = await 
  BlogPosts.findAll({ include: [
    { model: Users, as: 'users' },
    { model: Categories, as: 'categories' },
  ] });

  return blogPosts;
}; */

module.exports = {
  criarPosts,
  buscarPosts,
};