const { createNewUser, loginUser, getEveryone, getByID } = require('./userController');
const { createNewCategory, getAllCategories } = require('./categoryController');

module.exports = {
  createNewUser,
  loginUser,
  getEveryone,
  getByID,
  createNewCategory,
  getAllCategories,
};