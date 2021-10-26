const { validadeDisplayName, validateEmail, validatePassword } = require('./validations');

async function validadeFields(email, password, displayName) {
  const displayNameError = validadeDisplayName(displayName);
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  if (displayNameError) {
    return displayNameError;
  }

  if (emailError) {
    return emailError;
  }

  if (passwordError) {
    return passwordError;
  }
}

module.exports = { validadeFields };
