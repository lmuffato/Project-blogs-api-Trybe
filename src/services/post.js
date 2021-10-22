const { Op } = require('sequelize');
const { BlogPost } = require('../models');

// baita gambiarra, ajeitar isso depois
const createPost = async ({ title, content }, userId) => {
  await BlogPost.create({ title, content, userId });
  const findPost = await BlogPost.findAll({
    where: { title: { [Op.eq]: title } },
    attributes: { exclude: ['published', 'updated', 'categoryIds'] },
  });
  return findPost[0];
};

module.exports = { createPost };
