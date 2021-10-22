const { Post, Category, User } = require('../models');
const { postValidation } = require('../utils/schema');

const OK_STATUS = 200;
const CREATED_STATUS = 201;
const BAD_REQUEST_STATUS = 400;

// ---------------------------------------- CREATE ------------------------------------------------ //

const createPostService = async (post, { id: userId }) => {
  const { error } = postValidation.validate(post);
  if (error) {
    return {
      status: BAD_REQUEST_STATUS,
      message: error.details[0].message,
    };
  }

  // Ref. para local da message: Felipe Flores (https://github.com/tryber/sd-010-a-project-blogs-api/pull/15)

  const { title, content, categoryIds } = post;

  const categoryExist = await Category.findAll({ where: { id: categoryIds } });
  if (categoryExist.length !== categoryIds.length) {
    return {
      status: BAD_REQUEST_STATUS,
      message: '"categoryIds" not found',
    };
  }
  const dataPost = { title, content, userId, published: new Date(), updated: new Date() };
  const blogPost = await Post.create(dataPost);

  return { status: CREATED_STATUS, data: blogPost };
};

// ---------------------------------------- GETALL ------------------------------------------------ //

const getAllPostService = async () => {
  const posts = await Post.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return { status: OK_STATUS, data: posts };
};

module.exports = {
  createPostService,
  getAllPostService,
};
