const createUser = require('./userControllers/createUser');
const userLogin = require('./loginControllers/userLogin');
const getUsers = require('./userControllers/getUsers');
const getUserById = require('./userControllers/getUserById');

module.exports = {
  createUser,
  userLogin,
  getUsers,
  getUserById,
};
