const validateEmailFormat = require('./validateEmailFormat');
const validateEmailLogin = require('./validateEmailLogin');
const validateCategoryName = require('./validateGeneralName');
const validateName = require('./validateName');
const validatePassword = require('./validatePassword');
const validatePasswordLogin = require('./validatePasswordLogin');
const validateToken = require('./validateToken');

module.exports = {
    validateName,
validatePassword,
validateEmailFormat,
validateEmailLogin,
validatePasswordLogin,
validateToken,
validateCategoryName,
};