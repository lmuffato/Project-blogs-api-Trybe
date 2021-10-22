const { BlogPost, Category, User } = require('../models');

const validateCategories = async (categoryIds) => {
  const getCategories = await Category.findAll({ where: { id: categoryIds } });

  if (getCategories.length !== categoryIds.length) {
    return null;
  }

  return true;
};

const createPost = async (blogPost, id) => {
  const { title, content, categoryIds } = blogPost;

  const newPost = await BlogPost
    .create({ userId: id, title, content, published: new Date(), updated: new Date() });
  
  const validCategories = await validateCategories(categoryIds);
  
  if (!validCategories) {
    return {
      code: 400,
      message: '"categoryIds" not found',
    };
  }

  return newPost;
};

const findPost = async () => {
  const post = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

const findById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!post) {
    return {
      code: 404,
      message: 'Post does not exist',
    };
  }

  return post;
};

const updatePost = async (id, newData) => {
  const { title, content } = newData;
  await BlogPost.update(
    { title, content },
    { where: {
      id,
    } },
  );

  const postUpdated = await BlogPost.findByPk(id, {
    include: [
      // { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return postUpdated;
};

module.exports = {
  createPost,
  findPost,
  findById,
  updatePost,
};