const { validateDisplayName } = require('./validateDisplayName');
const { validateEmail } = require('./validateEmail');
const { validatePassword } = require('./validatePassword');
const { validateToken } = require('./validateToken');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateToken,
};