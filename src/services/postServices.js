// const { Op } = require('sequelize');

const { BlogPosts, User, Categories } = require('../models');

const createBlogPost = async ({ title, content, userId }) => {
  const post = await BlogPosts.create({ title, content, userId: 1 });  
  return post;
};

const getPostsByCategoryId = async (ids) => {
  const posts = BlogPosts.findAll({ where: { categoryId: ids } });
  return posts;
};

const getAllPosts = async () => {
  const posts = await BlogPosts.findAll({ include: [
    { model: User, as: 'users' },
    { model: Categories, as: 'categories', through: { attributes: ['id', 'name'] } }],
  });
  return posts;
};

module.exports = { createBlogPost, getPostsByCategoryId, getAllPosts };
