const { in: opIn } = require('sequelize').Op;
const { BlogPost, Category } = require('../../models');
const validateFcts = require('../utils/validateFunctions');
const error = require('../utils/errorsObject');

const createPost = async (title, categoryIds, content, userId) => {
  validateFcts.validatePost({ title, categoryIds, content });
  const categoryIdExists = await Category.findAll({ where: { id: { [opIn]: categoryIds } } });
  if (!categoryIdExists.length) throw error.categoryNotFound;
  const result = await BlogPost.create({ title, categoryIds, content, userId });
  return result;
};

module.exports = {
  createPost,
};