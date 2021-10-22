const { Op } = require('sequelize');
const { BlogPost, Category } = require('../models');

const createPost = async ({ title, content }, userId) => {
  await BlogPost.create({ title, content, userId });
  const findPost = await BlogPost.findAll({
    where: { title: { [Op.eq]: title } },
    attributes: { exclude: ['published', 'updated'] },
  });
  return findPost[0];
};

const searchCategory = async (categoryIds) => {
  const categories = await Category.count({ where: { id: categoryIds } });
  return categories;
};

module.exports = {
  createPost,
  searchCategory,
};
