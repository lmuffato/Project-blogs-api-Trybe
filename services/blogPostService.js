const { BlogPost, User, Category } = require('../models');
const { findAllCategory } = require('./categoryService');

const createPost = async ({ title, content, categoryIds, userId }) => {
  if (!categoryIds || categoryIds.length === 0) {
    return 'erroCategory';
  }

  const allCategory = await findAllCategory();
  const arrayNewCategoryIds = allCategory.map((category) => category.id); // retirar id dos obj e coloca em array
  const filteredCategory = arrayNewCategoryIds.filter((category) => categoryIds.includes(category));
  if (filteredCategory.length !== categoryIds.length) {
      return '!existsCategory';
  }
  return BlogPost.create({ title, userId, content });
};

const findAllPosts = async () => {
  const blogsPosts = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  
    if (blogsPosts === null) {
      return '!exists';
    }
    return blogsPosts;
  };

  const findPostsById = async (id) => {
    console.log(id);

    const postById = await BlogPost.findOne(
      { where: { id }, 
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] },
    );
        if (postById === null) {
        return { message: 'Post does not exist' };
      }
      return postById;
  };

module.exports = { createPost, findAllPosts, findPostsById };