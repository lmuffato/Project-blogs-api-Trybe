const { postValidate } = require('../validateJOI/validateUserJoi');
const { BlogPost } = require('../models');
const { getCategoryById } = require('../services/postService');

const validPost = async (req, _res, next) => {
  const { error } = postValidate.validate(req.body);
  if (error) return next({ statusCode: 400, message: error.message });
  next();
};

const checkIfCategoryExists = async (req, _res, next) => {
  const { categoryIds } = req.body;
  const category = await getCategoryById(categoryIds[0]);
  if (!category) {
  return next({
      statusCode: 400,
      message: '"categoryIds" not found',
    });
  }
  next();
};

const checkIfPostExists = async (req, res, next) => {
  const { id } = req.params;
  const post = await BlogPost.findByPk(id);
  if (!post) return next({ statusCode: 404, message: 'Post does not exist' });
  next();
};
module.exports = {
  validPost,
  checkIfCategoryExists,
  checkIfPostExists,
};