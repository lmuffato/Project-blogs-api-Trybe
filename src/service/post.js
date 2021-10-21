const joi = require('../middleware/joi');
const { Post, Category } = require('../../models');

const createPost = async (data, { id: userId }) => {
  const { error } = joi.Post.validate(data);
  if (error) return { status: 400, message: error.details[0].message };

  const { categoryIds, title, content } = data;
  const post = await Post.create(
    { title, content, userId, published: new Date(), updated: new Date() },
);
  const Categories = await Category.findAll({ where: { id: categoryIds } });
  if (Categories.length !== categoryIds.length) {
  return { status: 400, message: '"categoryIds" not found' };
}
  return { status: 201, data: post };
};

module.exports = {
  createPost,
};
