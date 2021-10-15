const { BlogPost, Category } = require('../models');

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

const createPost = async (title, content, categoryIds, userId) => {
  const isExist = await getCategoryById(categoryIds[0]);

  if (isExist === null) {
    return {
    err: { message: '"categoryIds" not found' } }; 
}

  const post = await BlogPost.create({ title, content, categoryIds, userId });
  return { post };
};

const getAllPost = async () => {
  const result = await BlogPost.findAll({ include: [{ all: true }] });
  return result;
};

module.exports = {
  createPost,
  getAllPost,
};
