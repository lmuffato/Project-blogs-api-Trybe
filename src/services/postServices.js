// const { Op } = require('sequelize');

const { BlogPosts, Categories } = require('../models');

const createBlogPost = async ({ title, content, userId }) => {
  const post = await BlogPosts.create({ title, content, userId });  
  return post;
};

const getPostsByCategoryId = async (categoryIds) => {
  const categories = await Categories.findAll({ where: { id: categoryIds } });

  if (categories.length === categoryIds.length) return categories;
  return null;
};

module.exports = { createBlogPost, getPostsByCategoryId };
