const { BlogPost, User, Category } = require('../models');
const postValidation = require('../validations/postValidation');

const addPost = async (title, categoryIds, content, token) => {
  postValidation.validatePostTitle(title);
  postValidation.validatePostContent(content);
  await postValidation.validatePostCategory(categoryIds);
  const email = postValidation.validateToken(token);
  const findUser = await User.findOne({ where: { email } });
  const newPost = await BlogPost.create({
    userId: findUser.id,
    title,
    content,
  });
  return { status: 201, response: newPost.dataValues };
};

const getAllPosts = async (token) => {
  postValidation.validateToken(token);
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

module.exports = {
  addPost,
  getAllPosts,
};
