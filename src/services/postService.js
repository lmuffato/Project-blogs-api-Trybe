const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');

const create = async (data) => {
  const newPost = await BlogPost.create(data);
  return newPost;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const getAllPosts = async () => {
  const allPosts = await BlogPost.findAll({ include: [{ all: true }] });
  return allPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, { include: [{ all: true }] });
  return post;
};

const updateASinglePost = async (id, { title, content }) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const postUpdated = await getPostById(id);
  return postUpdated;
};

const remove = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const getSearchTerm = async (query) => {
  const singlePost = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return singlePost;
};

// https://stackoverflow.com/questions/20695062/sequelize-or-condition-object/32543638

module.exports = {
  create,
  getCategoryById,
  getAllPosts,
  getPostById,
  updateASinglePost,
  remove,
  getSearchTerm,
};