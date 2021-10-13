const { BlogPosts, PostsCategories } = require('../models');

const createPost = async (title, content, userId, categoryIds) => {
  const { dataValues } = await BlogPosts.create({ title, content, userId });

  const { id } = dataValues;

  categoryIds.forEach(async (category) => {
    await PostsCategories.create({ postId: id, categoryId: category });
  });

  return { id, userId, title, content };
};

module.exports = { createPost };
