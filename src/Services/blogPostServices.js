const blogPostModel = require('../Models/blogPostModel');
const categoriesModel = require('../Models/categoriesModel');

const {
  titleValidations,
  contentValidations,
  categoryIdsValidations,
} = require('../Schema/blogPostValidations');

const addBlogPost = async (userId, title, content, categoryIds) => {
  const titleValidate = titleValidations(title);
  const contentValidate = contentValidations(content);
  const categoryValidate = categoryIdsValidations(categoryIds);

  if (titleValidate) return titleValidate;
  if (contentValidate) return contentValidate;
  if (categoryValidate) return categoryValidate;

  const categoryIdExists = await categoriesModel.checkCategoryExists(categoryIds);
  if (categoryIdExists) {
    const { code, message } = categoryIdExists;
    return { code, message };
  }

  const { code, blogPost } = await blogPostModel.addBlogPost(userId, title, content);

  return {
    code,
    blogPost,
  };
};

module.exports = {
  addBlogPost,
};