const rescue = require('express-rescue');
const { StatusCodes: { BAD_REQUEST } } = require('http-status-codes');
const { postSchema } = require('../schemas/postSchema');
const { Category } = require('../models');

const validatePost = rescue(async (req, _res, next) => {
  const { error } = postSchema.validate(req.body);
  const { categoryIds } = req.body;

  if (error) next({ message: error.details[0].message, statusCode: BAD_REQUEST });

  categoryIds.every(async (id) => {
    if (await Category.findByPk(id) === null) {
      next({ message: '"categoryIds" not found', statusCode: BAD_REQUEST });
    }
  });
  next();
});

module.exports = validatePost;