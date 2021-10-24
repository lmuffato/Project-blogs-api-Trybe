const { BlogPost, User, Category } = require('../../models');

const findAll = async () => {
  const postList = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  
  return postList;
};

module.exports = findAll;
