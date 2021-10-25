const { BlogPosts, Categories } = require('../models');

const verifyCategorie = async (categoryIds) => {
  const categories = await Categories.findAll({
    where: { id: categoryIds },
  });
  await Promise.all(categories);
  
  return categories;
};

const createPost = async (title, content, userId, categoryIds) => {
  const categories = await verifyCategorie(categoryIds);
  const error = { code: 400, message: '"categoryIds" not found' };

  if (categories.length < 1) {
    return error;    
  }
  const { dataValues } = await BlogPosts.create({ title, content, userId, categoryIds });

  const { id } = dataValues;

  return { id, userId, title, content };
};

module.exports = { createPost };