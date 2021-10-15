const Joi = require('joi');
const { BlogPosts, Category } = require('../models');

const postValidations = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const createPost = async (data, userId) => {
  const { error } = postValidations.validate(data);
  if (error) return { status: 400, message: error.details[0].message };
  const { categoryIds, title, content } = data;
  const findCategory = await Category.findOne({ where: { id: categoryIds } });
  if (!findCategory) return { status: 400, message: '"categoryIds" not found' };
  const blogpost = await BlogPosts.create({
    title, content, categoryIds, userId, published: new Date(), updated: new Date() });
  return { status: 201, blogpost };
};

const getAllPosts = async () => {
  const allPosts = await BlogPosts.findAll({ include: [{ all: true }] });
  return { status: 200, allPosts };
};

module.exports = { createPost, getAllPosts };