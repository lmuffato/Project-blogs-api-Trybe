const joi = require('../middlewares/schema');
const { Post, Category, User } = require('../models');

async function getPostById(id) {
  const post = await Post.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!post) {
    return { status: 404, message: 'Post does not exist' };
  }
  return { status: 200, data: post };
}

async function getAllPosts() {
  const posts = await Post.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { status: 200, data: posts };
}

async function createPost(data, { id: userId }) {
  const { error } = joi.Post.validate(data);
  if (error) {
    return { status: 400, message: error.details[0].message };
  }
  const { categoryIds, title, content } = data;
  const post = await Post.create(
    { title, content, userId, published: new Date(), updated: new Date() },
);
const getCategories = await Category.findAll({ where: { id: categoryIds } });
if (getCategories.length !== categoryIds.length) {
  return { status: 400, message: '"categoryIds" not found' };
}
  return { status: 201, data: post };
}

module.exports = { createPost, getAllPosts, getPostById };