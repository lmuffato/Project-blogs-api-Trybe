const { Op } = require('sequelize');
const { Post, User, Category } = require('../models');
const Schema = require('../utils/schema');

const create = async (data, { id: userId }) => {
  const { error } = Schema.Posts.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  
  const { categoryIds, title, content } = data;
  const post = await Post
    .create({ title, content, userId, published: new Date(), updated: new Date() });
  
  // categoryIds.forEach(async (e) => {
  //   await Category.create({ postId: post.id, categoryId: e });
  // });

  const getCategories = await Category.findAll({ where: { id: categoryIds } });

  if (getCategories.length !== categoryIds.length) {
    return { status: 400, message: '"categoryIds" not found' };
  }

  return { status: 201, data: post };
};

const getAll = async () => {
  const posts = await Post.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, data: posts };
};

const getById = async (id) => {
  const post = await Post.findByPk(id, { 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) return { status: 404, message: 'Post does not exist' };

  return { status: 200, data: post };
};

const update = async (id, data, { id: userId }) => {
  const { categoryIds, ...dataEdit } = data;
  if (categoryIds) return { status: 400, message: 'Categories cannot be edited' };

  const { error } = Schema.PostUpdate.validate(dataEdit);
  if (error) return { status: 400, message: error.details[0].message };

  if (userId !== Number(id)) return { status: 401, message: 'Unauthorized user' };

  await Post.update({ ...dataEdit }, { where: { id } });

  const post = await Post
    .findByPk(id, { include: { model: Category, as: 'categories', through: { attributes: [] } } });

  return { status: 200, data: post };
};

const remove = async (id, { id: userId }) => {
  const post = await Post.findByPk(id);
  if (!post) return { status: 404, message: 'Post does not exist' };
  
  if (userId !== Number(id)) return { status: 401, message: 'Unauthorized user' };

  await post.destroy();

  return { status: 204 };
};

const getQueryParams = async (query) => {
  const posts = await Post.findAll({
    // https://stackoverflow.com/questions/20695062/sequelize-or-condition-object/32543638
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

  const fitlerPost = posts.filter((post) => [post].includes(query));

  console.log(fitlerPost);

  return { status: 200, data: posts };
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
  getQueryParams,
};