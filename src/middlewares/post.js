const {
  StatusCodes: { BAD_REQUEST },
} = require('http-status-codes');
const { postSchema } = require('../validations/schema');
const { getCategoryById } = require('../services/postService');

const validPost = async (req, _res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
  next();
};

const checkIfCategoryExists = async (req, _res, next) => {
  const { categoryIds } = req.body;
  console.log('📓 ~ file: post.js ~ line 15 ~ checkIfCategoryExists ~ req.body', req.body);
  const category = await getCategoryById(categoryIds[0]);
  console.log('📓 ~ file: post.js ~ line 17 ~ checkIfCategoryExists ~ category', category);
  if (!category) {
  return next({
      statusCode: BAD_REQUEST,
      message: '"categoryIds" not found',
    });
  }
  next();
};
module.exports = {
  validPost,
  checkIfCategoryExists,
};
