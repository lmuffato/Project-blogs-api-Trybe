const {
  createNewUser,
  loginUser,
  getEveryone,
  getByID,
  removeMySelf,
} = require('./userController');
const { createNewCategory, getAllCategories } = require('./categoryController');
const {
  createNewPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require('./postController');

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
  updatePost,
  deletePost,
  removeMySelf,
};
