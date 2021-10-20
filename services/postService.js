const { BlogPost, PostsCategory, Users, Categories } = require('../models');

const createPosts = async (title, content, user) => {
  const result = await BlogPost.create({
    title,
    content, 
    published: Date.now(), 
    updated: Date.now(), 
    userId: user.id,
  });
  return result;
};

const createPostCategories = async (id, categoryIds) => {
  const result = await categoryIds.forEach((item) => {
    PostsCategory.create({ 
      postId: id, 
      categoryId: item,
    });
  });
  return result;
};

const getAll = async () => {
  const result = await BlogPost.findAll({
    include: [
      { model: Users, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categories, as: 'categories', through: { attributes: [] } },
    ],
  });
  return result;
};

module.exports = {
  createPosts,
  createPostCategories,
  getAll,
};