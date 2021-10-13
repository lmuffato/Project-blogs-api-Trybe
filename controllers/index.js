const createUser = require('./userControllers/createUser');
const userLogin = require('./loginControllers/userLogin');
const getUsers = require('./userControllers/getUsers');

module.exports = {
  createUser,
  userLogin,
  getUsers,
};
