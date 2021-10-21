const joi = require('../middlewares/schema');
const { Post, Category } = require('../models');

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

module.exports = { createPost };