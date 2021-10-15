/* eslint-disable max-lines-per-function */
const { BlogPost, Category, User } = require('../models/index');
const Joi = require('../Joi/templates');

const createPost = async (body, user) => {
  const { title, content, categoryIds } = body;
  const { id } = user;
  const { error } = Joi.Post.validate(body);

  if (error) return { code: 400, message: error.details[0].message };

  const categoriesPromises = await Promise.all(categoryIds
    .map((category) => Category.findByPk(category)));

  const validCategories = categoriesPromises.every((category) => category !== null);
  if (!validCategories) return { code: 400, message: '"categoryIds" not found' };

  const result = await BlogPost.create({ title, content, userId: id });
  return result;
};

const getAllPosts = async () => BlogPost.findAll(
  {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  },
);

const getPostById = async (id) => {
  const post = await BlogPost.findOne(
    {
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    },
  );

  if (!post) return { code: 404, message: 'Post does not exist' };

  return post;
};

const editPost = async ({ id, title, content }, userId) => {
  const post = await BlogPost.findByPk(id);
  // console.log('-----------------');
  // console.log(userId);
  console.log(title);
  if (userId !== post.userId) return { code: 401, message: 'Unauthorized user' };
  // const { error } = Joi.EditPost.validate({ title, content });
  // if (error) return { code: 400, message: error.details[0].message };
  try {
    await BlogPost.update({
      title,
      content,
    },
      {
        where: { id },
      });
  } catch (err) {
    console.log(err);
    return err;
  }
  const editedPost = await BlogPost.findByPk(
    id,
    { include: { model: Category, as: 'categories', through: { attributes: [] } } },
  );
  return editedPost;
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  editPost,
};