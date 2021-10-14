const error = require('./error');
const { validUser, checkIfUserExists } = require('./user');
const login = require('./login');
const Auth = require('./Authentication');
const categoryCheck = require('./category');

module.exports = {
  error,
  validUser,
  login,
  Auth,
  checkIfUserExists,
  categoryCheck, 
};