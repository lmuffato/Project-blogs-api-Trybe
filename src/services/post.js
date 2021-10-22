// const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');

const createPost = async (post, userId) => {
  // await BlogPost.create({ title, content, userId });
  // const findPost = await BlogPost.findAll({
  //   where: { title: { [Op.eq]: title } },
  //   attributes: { exclude: ['published', 'updated'] },
  // });
  // return findPost[0];

  const formatPost = { ...post, userId };
  const create = await BlogPost.create(formatPost);
  return create;
};

const searchCategory = async (categoryIds) => {
  const categories = await Category.count({ where: { id: categoryIds } });
  return categories;
};

const getPosts = async () => {
  const getAll = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return getAll;
};

const getPost = async (id) => {
  const getOne = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return getOne;
};

module.exports = {
  createPost,
  searchCategory,
  getPosts,
  getPost,
};
