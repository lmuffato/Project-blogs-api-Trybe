const { validateEmail, validatePassword } = require('./validations');

async function validadeLoginFields(email, password) {
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  if (emailError) {
    return emailError;
  }

  if (passwordError) {
    return passwordError;
  }
}

module.exports = validadeLoginFields;