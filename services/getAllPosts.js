const { BlogPost, User, Category } = require('../models');

module.exports = async () => {
  const posts = await BlogPost.findAll({ include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories' },
  ] });
  return posts;
};