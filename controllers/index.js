const createUser = require('./userControllers/createUser');
const userLogin = require('./loginControllers/userLogin');
const getUsers = require('./userControllers/getUsers');
const getUserById = require('./userControllers/getUserById');
const createCategory = require('./categoriesControllers/createCategory');
const getCategories = require('./categoriesControllers/getCategories');
const createBlogPost = require('./postsControllers/createBlogPost');
const getBlogPosts = require('./postsControllers/getBlogPosts');
const getPostById = require('./postsControllers/getPostById');
const updatePost = require('./postsControllers/updatePost');

module.exports = {
  createUser,
  userLogin,
  getUsers,
  getUserById,
  createCategory,
  getCategories,
  createBlogPost,
  getBlogPosts,
  getPostById,
  updatePost,
};
