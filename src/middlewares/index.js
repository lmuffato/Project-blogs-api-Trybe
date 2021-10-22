const error = require('./error');
const { validUser, checkIfUserExists } = require('./user');
const login = require('./login');
const Auth = require('./Authentication');
const categoryCheck = require('./category');
const {
  validPost,
  checkIfCategoryExists,
  checkIfPostExists,
  allowUpdate,
  allowDelete,
} = require('./post');

module.exports = {
  error,
  validUser,
  login,
  Auth,
  checkIfUserExists,
  categoryCheck,
  validPost,
  checkIfCategoryExists,
  checkIfPostExists,
  allowUpdate,
  allowDelete,
};
