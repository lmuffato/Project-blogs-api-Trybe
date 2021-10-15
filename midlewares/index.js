const validateCategoriesId = require('./validateCategoriesId');
const validateCategoriesUpdate = require('./validateCategoryUpdate');
const validateEmailFormat = require('./validateEmailFormat');
const validateEmailLogin = require('./validateEmailLogin');
const validateCategoryName = require('./validateGeneralName');
const validateName = require('./validateName');
const validatePassword = require('./validatePassword');
const validatePasswordLogin = require('./validatePasswordLogin');
const validatePost = require('./validatePost');
const validatePostExistence = require('./validatePostExistence');
const validateToken = require('./validateToken');
const validateUserId = require('./validateUserId');

module.exports = {
    validateName,
validatePassword,
validateEmailFormat,
validateEmailLogin,
validatePasswordLogin,
validateToken,
validateCategoryName,
validateCategoriesId,
validatePost,
validateUserId,
validateCategoriesUpdate,
validatePostExistence,
};