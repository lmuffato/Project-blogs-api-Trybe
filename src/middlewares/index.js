const error = require('./error');
const { validUser, checkIfUserExists } = require('./user');
const login = require('./login');
const Auth = require('./Authentication');

module.exports = {
  error,
  validUser,
  login,
  Auth,
  checkIfUserExists,
};