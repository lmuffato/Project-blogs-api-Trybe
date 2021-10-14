const { createNewUser, loginUser, getEveryone, getByID } = require('./userController');
const { createNewCategory } = require('./categoryController');

module.exports = {
  createNewUser,
  loginUser,
  getEveryone,
  getByID,
  createNewCategory,
};