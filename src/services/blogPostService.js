const { in: opIn } = require('sequelize').Op; 
// opIn é o mesmo que in, mas por ser uma palavra reservada, o Sequelize utiliza o opIn
const { BlogPost, Category, User } = require('../../models');
const validateFcts = require('../utils/validateFunctions');
const error = require('../utils/errorsObject');

const createPost = async (title, categoryIds, content, userId) => {
  validateFcts.validatePost({ title, categoryIds, content });
  const categoryIdExists = await Category.findAll({ where: { id: { [opIn]: categoryIds } } });
  if (!categoryIdExists.length) throw error.categoryNotFound;
  const result = await BlogPost.create({ title, categoryIds, content, userId });
  return result;
};

const getAllPosts = async () => {
  const result = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = {
  createPost,
  getAllPosts,
};