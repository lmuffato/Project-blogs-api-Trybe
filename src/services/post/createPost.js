const { BlogPost } = require('../../models');
const { Category } = require('../../models');
const { blogPostValidation } = require('../../middlewares/BlogPost');

const createPost = async (newBlogPost) => {
  blogPostValidation(newBlogPost);
  const { categoryIds } = newBlogPost;

  const categoriesList = await Category.findAll();

  const categoriesIds = categoriesList.map((cat) => cat.id);

  const compareCategoriesIds = categoriesIds.filter((category) => categoryIds.includes(category));

  if (compareCategoriesIds.length !== categoryIds.length) {
    return;
  }

  const newPost = await BlogPost.create(newBlogPost);

  return newPost;
};

module.exports = createPost;