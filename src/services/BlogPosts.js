const { Op } = require('sequelize');
const { BlogPosts, Users, Categories } = require('../models');
const { insertPostCategories } = require('./PostCategories');

const getPostById = async (id) => {
  const post = await BlogPosts.findByPk(id, {
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const getAllPosts = async () => {
  const posts = await BlogPosts.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const updatePost = async (data, id) => {
  const post = await BlogPosts.update(data, { where: { id } }).then(() =>
    BlogPosts.findByPk(id, {
      include: [
        { model: Categories, as: 'categories', through: { attributes: [] } },
      ],
    }));
  return post;
};

const deletePost = async (id) => {
  await BlogPosts.destroy({ where: { id } });
};

const createPost = async (data) => {
  const { dataValues } = await BlogPosts.create(data);
  await insertPostCategories(data.categoryIds, dataValues.id);

  return dataValues;
};

const searchPost = async (term) => {
  const post = await BlogPosts.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${term}%` } },
        { content: { [Op.like]: `%${term}%` } },
      ],
    },
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

module.exports = {
  getPostById,
  createPost,
  getAllPosts,
  updatePost,
  deletePost,
  searchPost,
};
