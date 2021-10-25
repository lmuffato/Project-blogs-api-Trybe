const { BlogPost, User, Category } = require('../models');
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

const getPost = async (token) => {
  userValidations.validateToken(token);
  userValidations.validateTokenRequired(token);
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', attributes: { through: [] } },
    ],
  });
  
  console.log('posts', posts);
  return { status: 200, response: posts };
};

module.exports = {
  addPost,
  getPost,
};