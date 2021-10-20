// const { Op } = require('sequelize');

const { BlogPosts, Categories, User } = require('../models');

const createBlogPost = async ({ title, content, userId }) => {
  const post = await BlogPosts.create({ title, content, userId });  
  return post;
};

const getPostsByCategoryId = async (categoryIds) => {
  const categories = await Categories.findAll({ where: { id: categoryIds } });

  if (categories.length === categoryIds.length) return categories;
  return null;
};

const getAllPosts = async () => {
  console.log('entrei');
  const posts = await BlogPosts.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories' }],
    });

  console.log(posts);
  return posts;
};

module.exports = { createBlogPost, getPostsByCategoryId, getAllPosts };
