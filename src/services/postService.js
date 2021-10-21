const { BlogPost, Category } = require('../models');

const validateCategories = async (categoryIds) => {
  const getCategories = await Category.findAll({ where: { id: categoryIds } });

  if (getCategories.length !== categoryIds.length) {
    return null;
  }

  return true;
};

const createPost = async (blogPost, id) => {
  // console.log(userId);
  const { title, content, categoryIds } = blogPost;

  const newPost = await BlogPost
    .create({ userId: id, title, content, published: new Date(), updated: new Date() });
  
  const validCategories = await validateCategories(categoryIds);
  
  if (!validCategories) {
    return {
      code: 400,
      message: '"categoryIds" not found',
    };
  }

  return newPost;
};

module.exports = {
  createPost,
};