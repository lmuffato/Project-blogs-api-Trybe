const { createNewUser, loginUser, getEveryone, getByID } = require('./userController');
const { createNewCategory, getAllCategories } = require('./categoryController');
const { createNewPost } = require('./postController');

module.exports = {
  createNewUser,
  loginUser,
  getEveryone,
  getByID,
  createNewCategory,
  getAllCategories,
  createNewPost,
};