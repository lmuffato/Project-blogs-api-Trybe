const { BlogPost } = require('../models');
const { validationPost } = require('../validations/PostValidations');

const createPost = async (title, content, categoryIds, userId) => {
  const validations = await validationPost(title, categoryIds, content);
  if (validations.message) return validations;

  const newPost = await BlogPost.create({ userId, title, content });
  return { newPost };
};

module.exports = {
  createPost,
};
