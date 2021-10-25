const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  const userId = user.dataValues.id;
  return userId;
};

const createBlogPost = async (title, categoryIds, content, user) => {
  const userEmail = user.email;
  // console.log(userEmail);
  const userId = await getUserByEmail(userEmail);
  console.log('title', title);
  await BlogPost.create({ title, categoryIds, content, userId });
  const createdPost = await BlogPost.findOne({ where: { title } });
  return createdPost;
};

const getAllPosts = async (_user) => {
  // const userEmail = user.email;
  const allPosts = await BlogPost.findAll({ 
    include: [
    { model: User, 
      as: 'user',
      attributes: 
        { exclude: ['password'] } }, 
    { model: Category,
      as: 'categories', 
      through: { attributes: [] } },
  ] });
  console.log('all posts', allPosts);
  return allPosts;
};

// requisito 08 feito com a ajuda do colega Eduardo Costa.

module.exports = {
  createBlogPost,
  getAllPosts,
};