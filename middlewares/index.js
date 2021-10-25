const errMiddleware = require('./errMiddleware');
const validateUserData = require('./validateUserData');
const validateUserAccess = require('./validateUserAccess');

module.exports = {
  errMiddleware,
  validateUserData,
  validateUserAccess,
};