// const { StatusCodes: { OK, BAD_REQUEST } } = require('http-status-codes');
const { BlogPost, User, Category } = require('../models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  const result = await BlogPost.create({ 
    title,
    content,
    categoryIds,
    userId,
  });
  return result;
};

const findAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
      // este trecho fiz com base no código do Adelino
    ],
  });
  return result;
};

module.exports = {
  createPost,
  findAll,
};