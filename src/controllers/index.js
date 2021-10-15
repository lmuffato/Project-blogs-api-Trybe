const { createNewUser, loginUser, getEveryone, getByID } = require('./userController');
const { createNewCategory, getAllCategories } = require('./categoryController');
const { createNewPost, getPosts, getSinglePost } = require('./postController');

module.exports = {
  createNewUser,
  loginUser,
  getEveryone,
  getByID,
  createNewCategory,
  getAllCategories,
  createNewPost,
  getPosts,
  getSinglePost,
};