const { validateDisplayName } = require('./validateDisplayName');
const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { validateToken } = require('./validateToken');
const { validateName } = require('./validateName');
const { validateTitle } = require('./validateTitle');
const { validateContent } = require('./validateContent');
const { validateCategoryId } = require('./validateCategoryId');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateToken,
  validateName,
  validateTitle,
  validateContent,
  validateCategoryId,
};