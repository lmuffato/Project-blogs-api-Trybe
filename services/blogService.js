const { BlogPosts, Category } = require('../models');

const validTitle = (title) => {
  if (typeof title === 'undefined' || !title) return { code: 400, message: '"title" is required' };
  return {};
};

const validContent = (content) => {
  if (typeof content === 'undefined' || !content) { 
    return { 
      code: 400, 
      message: '"content" is required', 
    };
  }
  return {};
};

const validCategorieIds = (categoryIds) => {
  if (typeof categoryIds === 'undefined' || !categoryIds) {
    return { code: 400, message: '"categoryIds" is required' };
  }
  return {};
};
const blogPost = async (userId, body) => {
  const { title, content, categoryIds } = body;

  const Title = validTitle(title);
  if (Title.message) return Title;

  const Content = validContent(content);
  if (Content.message) return Content;

  const Categorie = validCategorieIds(categoryIds);
  if (Categorie.message) return Categorie;

  const categories = await Promise.all(categoryIds.map((category) => Category.findByPk(category)));
  const validCategories = categories.every((category) => category !== null);
  if (!validCategories) return { code: 400, message: '"categoryIds" not found' };

  const blog = await BlogPosts.create({ title, content, userId });

  return blog;
};

module.exports = { blogPost };