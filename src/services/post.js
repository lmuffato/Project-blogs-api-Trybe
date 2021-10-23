const { BlogPost, Category, User } = require('../models');

const createPost = async (post, userId) => {
  const formatPost = { ...post, userId };
  const create = await BlogPost.create(formatPost);
  return create;
};

const searchCategory = async (categoryIds) => {
  const categories = await Category.count({ where: { id: categoryIds } });
  return categories;
};

const getPosts = async () => {
  const getAll = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return getAll;
};

const getPost = async (id) => {
  const getOne = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return getOne;
};

const updatePost = async (dataForUpdate, id) => {
  await BlogPost.update(dataForUpdate, { where: { id } });
  const postUpdated = await getPost(id);
  return postUpdated;
};

const deleteUser = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

module.exports = {
  createPost,
  searchCategory,
  getPosts,
  getPost,
  updatePost,
  deleteUser,
};
