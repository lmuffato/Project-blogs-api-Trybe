const { BlogPost } = require('../models');
const postValidations = require('./validations/postValidations');
const userValidations = require('./validations/userValidations');

const addPost = async (post, token) => {
  userValidations.validateToken(token);
  userValidations.validateTokenRequired(token);
  postValidations.validatePost(post);
  await postValidations.validateCategoryIdsExist(post);
  const { data } = userValidations.validateToken(token);
  const result = await BlogPost.create({
    userId: data.id,
    title: post.title,
    content: post.content,
  });
  return { status: 201, response: result.dataValues };
};

module.exports = {
  addPost,
};