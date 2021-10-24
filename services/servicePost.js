const { Post, Category } = require('../models');
const check = require('../utils/util');

const createPost = async ({ categoryIds, title, content }, { userId }) => {
  const { error } = check.checkPost.validate({ categoryIds, title, content });
  if (error) return { status: 400, message: error.details[0].message };
  const date = new Date();

  const post = await Post.create({ title, content, userId, published: date, updated: date });

  const getCategories = await Category.findAll({ where: { id: categoryIds } });
  const verify = getCategories.length !== categoryIds.length;

  if (verify) return { status: 400, message: '"categoryIds" not found' };

  return { status: 201, post };
};

module.exports = {
  createPost,
};