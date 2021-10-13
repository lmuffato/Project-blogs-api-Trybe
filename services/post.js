const { BlogPost, Category } = require('../models');

const validateFieldsFilled = (title, content, categoryIds) => {
  if (title === undefined) {
    return { message: '"title" is required', check: false }; 
  }
  if (content === undefined) {
    return { message: '"content" is required', check: false }; 
  }
  if (categoryIds === undefined) {
    return { message: '"categoryIds" is required', check: false }; 
  }
  return { check: true };
};

const areCategoriesExists = async (categoryIds) => (
  categoryIds.reduce(async (check, id) => {
    const category = await Category.findOne({ where: { id } });
    if (category === null) return false;
    return check; 
  }, true)  
);
const create = async (title, content, categoryIds, userId) => {
  const isFielsFilled = validateFieldsFilled(title, content, categoryIds);
  if (!isFielsFilled.check) {
    const { message } = isFielsFilled;
    return { message };
  }
  if (!await areCategoriesExists(categoryIds)) {
    return { message: '"categoryIds" not found' };
  }
  try {
    const post = await BlogPost.create({ title, content, categoryIds, userId });
    return { post };
  } catch (e) {
    console.log(e.message);
    return { message: 'Algo deu errado' };
  }
};

module.exports = { create };