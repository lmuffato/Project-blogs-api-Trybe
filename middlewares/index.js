const errMiddleware = require('./errMiddleware');
const validateUserData = require('./validateUserData');
const validateUserAccess = require('./validateUserAccess');
const authMiddleware = require('./authMiddleware');

module.exports = {
  errMiddleware,
  validateUserData,
  validateUserAccess,
  authMiddleware,
};