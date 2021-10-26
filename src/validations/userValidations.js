const userModel = require('../models/userModel');
const { errors } = require('../utils/errors');

function validadeDisplayName(displayName) {
  if (displayName.length <= 8) {
    return { message: errors.lengthError('displayName', 8) };
  }
}

function validadePassword(password) {
  if (password === undefined) {
    return { message: errors.requiredError('password') };
  }

  if (password.length === 0) {
    return { message: errors.emptyFieldError('password') };
  }

  if (password.length < 6) {
    return { message: errors.passwordLengthError('password', 6) };
  }
}

async function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === undefined) {
    return { message: errors.requiredError('email') };
  }

  if (email.length === 0) {
    return { message: errors.emptyFieldError('email') };
  }

  if (!emailRegex.test(email)) {
    return { message: errors.validEmail() };
  }

  const user = await userModel.findUserByEmail(email);

  if (user) {
    return { message: errors.userExistError, status: 409 };
  }
}

async function validadeFields(email, password, displayName) {
  if (displayName) {
    const displayNameError = validadeDisplayName(displayName);

    if (displayNameError) {
      return displayNameError;
    }
  }
 
  const passwordError = validadePassword(password);
  const emailError = await validateEmail(email);

  if (passwordError) {
    return passwordError;
  }

  if (emailError) {
    return emailError;
  }
}

module.exports = validadeFields;