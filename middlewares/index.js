const errMiddleware = require('./errMiddleware');
const validateUserData = require('./validateUserData');
const validateUserAccess = require('./validateUserAccess');
const authMiddleware = require('./authMiddleware');
const validateCategoryData = require('./validateCategoryData');
const validatePostData = require('./validatePostData');
const validatePostDataUpdate = require('./validatePostDataUpdate');
const validateAuthUpdate = require('./validateAuthUpdate');

module.exports = {
  errMiddleware,
  validateUserData,
  validateUserAccess,
  authMiddleware,
  validateCategoryData,
  validatePostData,
  validatePostDataUpdate,
  validateAuthUpdate,
};