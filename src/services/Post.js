const Joi = require('joi');
const Sequelize = require('sequelize');
const { BlogPost, PostsCategory, Category, User } = require('../models');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

const postSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().required(),
});

const createBlogPost = (title, content, userId, transaction) => {
  const result = BlogPost.create(
    { title, content, userId, published: Date.now(), updated: Date.now() },
    { transaction },
  );

  return result;
};

const createPostsCategory = async (categoryId, postId, transcation) => {
  PostsCategory.create(
    { categoryId, postId },
    { transcation },
  );
};

const create = async (title, content, categoryIds, userId) => {
  const { error } = postSchema.validate({ title, content, categoryIds });

  if (error) return { status: 400, message: error.message };

  const checkCategories = await Category.findAll({ where: { id: categoryIds } });

  if (checkCategories.length !== categoryIds.length) {
    return { status: 400, message: '"categoryIds" not found' };
  }

  const result = await sequelize.transaction(async (t) => {
    const blogPost = await createBlogPost(title, content, userId, t);
    const { id } = blogPost.dataValues;

    await categoryIds.map((categoryId) => createPostsCategory(categoryId, id, t));

    return blogPost;
  });

  console.log(result);

  return { status: 201, result };
};

const findAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: 200, result };
};

module.exports = {
  create,
  findAll,
};
