const { BlogPosts } = require('../models');

const createPost = async (catTitle, catContent, catUserId) => { 
  const posts = await BlogPosts
    .create({ title: catTitle, content: catContent, userId: catUserId });
  const { id, userId, title, content } = posts.dataValues;
  return { id, userId, title, content };
};

const getAllPosts = async () => {
  const allBlogPosts = await BlogPosts.findAll({ include: ['user', 'categories'] });

  const arrayOfAllBlogPosts = allBlogPosts
  .map(({ id, title, content, userId, published, updated, user: { dataValues }, categories }) => {
    const value = { dataValues, categories };
    const { dataValues: user } = value;
    return { id, title, content, userId, published, updated, user, categories };
  });
  console.log(arrayOfAllBlogPosts);

  return arrayOfAllBlogPosts;
};

module.exports = {
  createPost,
  getAllPosts,
};
