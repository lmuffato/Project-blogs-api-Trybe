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

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
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

const findByPk = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', throught: { attributes: [] } },
    ],
  });

  if (!result) return { status: 404, message: 'Post does not exist' };

  return { status: 200, result };
};

const updateByPk = async (data, categoryIds) => {
  const { id, title, content, userId } = data;

  if (categoryIds) return { status: 400, message: 'Categories cannot be edited' };

  const getPost = await findByPk(id);

  if (!getPost) return { status: 404, message: 'Post does not exist' };

  const { userId: checkId } = getPost.result.dataValues;

  if (Number(checkId) !== Number(userId)) return { status: 401, message: 'Unauthorized user' };

  const { error } = updatePostSchema.validate({ title, content });

  if (error) return { status: 400, message: error.message };

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const { result } = await findByPk(id);

  console.log('result', result);

  return { status: 200, result };
};

module.exports = {
  create,
  findAll,
  findByPk,
  updateByPk,
};
