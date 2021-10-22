const {
  StatusCodes: { BAD_REQUEST, NOT_FOUND, UNAUTHORIZED },
} = require('http-status-codes');
const { postSchema, updatePostSchema } = require('../validations/schema');
const { BlogPost } = require('../models');
const { getCategoryById, getPostById } = require('../services/postService');

const validPost = async (req, _res, next) => {
  const { error } = postSchema.validate(req.body);
  if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
  next();
};

const checkIfCategoryExists = async (req, _res, next) => {
  const { categoryIds } = req.body;
  const category = await getCategoryById(categoryIds[0]);
  if (!category) {
    return next({
      statusCode: BAD_REQUEST,
      message: '"categoryIds" not found',
    });
  }
  next();
};

const checkIfPostExists = async (req, _res, next) => {
  const { id } = req.params;
  const post = await BlogPost.findByPk(id);
  if (!post) {
    return next({ statusCode: NOT_FOUND, message: 'Post does not exist' });
  }
  next();
};

const allowUpdate = async (req, _res, next) => {
  const { categoryIds } = req.body;
  if (categoryIds) {
    return next({ statusCode: BAD_REQUEST, message: 'Categories cannot be edited' });
  }
    const { error } = updatePostSchema.validate(req.body);
    if (error) return next({ statusCode: BAD_REQUEST, message: error.message });
    const { id } = req.params;
    const { id: userId } = req.user.data;
    const verifying = await getPostById(id);
    if (!verifying) return next({ statusCode: BAD_REQUEST, message: 'Post does not exist' });
    if (userId !== verifying.userId) {
      return next({ statusCode: UNAUTHORIZED, message: 'Unauthorized user' });
  } 
  next();
};

const allowDelete = async (req, _res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user.data;
  const verifying = await getPostById(id);
  if (!verifying) return next({ statusCode: NOT_FOUND, message: 'Post does not exist' });
  if (userId !== verifying.userId) {
      return next({ statusCode: UNAUTHORIZED, message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
  validPost,
  checkIfCategoryExists,
  checkIfPostExists,
  allowUpdate,
  allowDelete,
};
