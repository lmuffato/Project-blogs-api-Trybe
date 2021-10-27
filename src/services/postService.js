const { BlogPost, User, Category } = require('../models');
const postValidation = require('../validations/postValidation');

const addPost = async (title, categoryIds, content, token) => {
  postValidation.validatePostTitle(title);
  postValidation.validatePostContent(content);
  await postValidation.validatePostCategory(categoryIds);
  const id = await postValidation.validateToken(token);
  const findUser = await User.findOne({ where: { id } });
  const newPost = await BlogPost.create({
    userId: findUser.id,
    title,
    content,
  });
  return { status: 201, response: newPost.dataValues };
};

const getAllPosts = async (token) => {
  await postValidation.validateToken(token);
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', attributes: { through: [] },
      },
    ],
  });
  return { status: 200, response: posts }; 
};

const getPostById = async (id, token) => {
  await postValidation.validateToken(token);
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', attributes: { through: [] },
      },
    ],
  });
  postValidation.validatePostExists(post);
  return { status: 200, response: post };
};

const editPost = async (requestParams) => {
  const { id, token, title, content, categoryIds } = requestParams;
  postValidation.validatePostTitle(title);
  postValidation.validatePostContent(content);
  postValidation.validateCategoryExists(categoryIds);
  const user = await postValidation.validateToken(token);
  console.log(` user id${user}`);
  const getPost = await BlogPost.findByPk(id);
  postValidation.validatePostExists(getPost);
  postValidation.validateUserPost(getPost.userId, user);
  await BlogPost.update({ title, content }, {
    where: { id },
  });
  const updatedPost = await BlogPost.findOne({
    where: { id },
    include: [{ model: Category, as: 'categories', through: { attributes: [] } }],
  });
  return { status: 200, response: updatedPost };
};

const deletePost = async (id, token) => {
  const getPost = await BlogPost.findByPk(id);
  postValidation.validatePostExists(getPost);
  const user = await postValidation.validateToken(token);
  postValidation.validateUserPost(getPost.userId, user);
  await BlogPost.destroy({ where: { id } });
  return { status: 204 };
};

module.exports = {
  addPost,
  getAllPosts,
  getPostById,
  editPost,
  deletePost,
};
