const jwt = require('jsonwebtoken');
const { User, BlogPost, Category } = require('../models');

const { JWT_SECRET } = process.env;

const createPost = async ({ body: { title, content }, headers: { authorization } }) => {
  const { email } = jwt.decode(authorization, JWT_SECRET);
  
  const user = await User.findOne({ where: { email } });

  const newPost = await BlogPost
    .create({ title, content, userId: user.id, published: new Date(), updated: new Date() });

  return newPost;
};

const getAllPosts = async () => BlogPost.findAll({
  include: [
    {
      model: User, as: 'user',
    },
    {
      model: Category, as: 'categories',
    },
],
});

module.exports = {
  createPost,
  getAllPosts,
};
