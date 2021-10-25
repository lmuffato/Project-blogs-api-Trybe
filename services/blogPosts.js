const { BlogPost } = require('../models');
const { User } = require('../models');

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

module.exports = {
  createBlogPost,
};