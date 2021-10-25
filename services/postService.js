const { Category, BlogPost } = require('../models');

const createPostS = async (newPost) => {
  const { categoryIds } = newPost; // its array
  const allCategories = await Category.findAll();
  const allCategoriesId = allCategories
    .map((category) => categoryIds.includes(category.id));
  // verify if exists ids
  console.log(`${allCategoriesId.length} e ${categoryIds.length}`);
  if (allCategoriesId.length !== categoryIds.length) {
    return null;
  }
  const createdPost = await BlogPost.create(newPost);
  return createdPost;
};

module.exports = {
  createPostS,
};