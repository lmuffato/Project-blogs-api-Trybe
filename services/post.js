const { post, category } = require('../models');
const { postValidation } = require('../utils/schema');

const CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;

const createPostService = async (title, content, categoryIds, userId) => {
  const { error } = postValidation.validate({ title, content, categoryIds });
  if (error) {
    return {
      status: BAD_REQUEST_STATUS,
      message: error.details[0].message,
    };
  }

  const categoryExist = await category.findAll({ where: { id: categoryIds } });
  if (categoryExist.length !== categoryIds.length) {
    return {
      status: BAD_REQUEST_STATUS,
      message: '"categoryIds" not found',
    };
  }
  const dataPost = { title, content, userId, published: new Date(), updated: new Date() };
  const blogPost = await post.create(dataPost);

  return { status: CREATED_STATUS, data: blogPost };
};

module.exports = {
  createPostService,
};
