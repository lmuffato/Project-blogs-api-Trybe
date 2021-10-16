const createUser = require('./createUser');
const createLogin = require('./createLogin');
const getUsers = require('./getUsers');
const getUserById = require('./getUserById');
const createCategory = require('./createCategory');
const getAllCategories = require('./getAllCategories');
const createPost = require('./createPost');
const getAllPosts = require('./getAllPosts');
const getPostById = require('./getPostById');
const updateBlogPosts = require('./updateBlogPosts');
const deleteBlogPosts = require('./deleteBlogPosts');

module.exports = {
  createUser,
  createLogin,
  getUsers,
  getUserById,
  createCategory,
  getAllCategories,
  createPost,
  getAllPosts,
  getPostById,
  updateBlogPosts,
  deleteBlogPosts,
};