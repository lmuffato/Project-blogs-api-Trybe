const { BlogPost, Category } = require('../models');

const create = async (data) => {
  const newPost = await BlogPost.create(data);
  return newPost;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

module.exports = {
  create,
  getCategoryById,
};