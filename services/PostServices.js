const { Users, BlogPosts, Categories } = require('../models');

const createPost = async (title, content, categoryIds, userId) => {
  const newPost = await BlogPosts.create({ 
    title, content, categoryIds, userId, published: new Date(), updated: new Date() });
  return newPost;
};

const listAllPosts = async () => {
  const allPosts = await BlogPosts.findAll({
    include: 
      [
        { model: Users, as: 'user', atributes: { exclude: ['password'] } }, 
      { model: Categories, as: 'categories', atributes: { exclude: ['PostsCategories'] } },
    ],
  });
  return allPosts;
};

const findPostById = async (id) => {
  const findedPost = await BlogPosts.findByPk(id, { include: [{ all: true }] }); // Creditos Lucas Lara 
  return findedPost;
};

module.exports = {
  createPost,
  listAllPosts,
  findPostById,
};