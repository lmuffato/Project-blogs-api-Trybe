const { Op } = require('sequelize');
const { BlogPosts, Category, User } = require('../models');
const { ifCategoryIdsExists, HTTP_400 } = require('../helpers');

const createBlogPost = async (title, content, categoryIds) => {
  if (typeof categoryIds !== 'object') {
    return { status: HTTP_400, message: 'CategoryIds precisa ser um array' };
  }
  // console.log('🚀 ~ file: postService.js ~ line 7 ~ createBlogPost ~ categoryIds', categoryIds);

  const categoryFinder = await Category.findAll({ where: { id: { [Op.in]: categoryIds } } }); 
  // https://sequelize.org/master/manual/model-querying-basics.html

  if (categoryFinder.length === 0) {
    return { status: HTTP_400, message: ifCategoryIdsExists };
  }
};

const getAll = async () => {
  const get = await BlogPosts.findAll({ include: 
    [{ model: User, as: 'user' }, 
    { model: Category, as: 'categories', through: { attributes: [] } }] });
  // console.log('🚀 ~ file: postService.js ~ line 5 ~ getAll ~ get', get);
  return get;
};

module.exports = {
  createBlogPost,
  getAll,
};