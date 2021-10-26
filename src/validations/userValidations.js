const userModel = require('../models/userModel');
const { errors, httpStatusCode } = require('../utils/errors');

function validadeDisplayName(displayName) {
  if (displayName === undefined) {
    return { message: errors.requiredError('displayName') };
  }

  if (displayName.length < 8) {
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

function validateEmail(email) {
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
}

async function verifyUserEmail(email) {
  const alreadyExists = await userModel.findUserByEmail(email);

  const responseError = { status: httpStatusCode.conflit, message: errors.userAlreadyExistError };

  if (alreadyExists) return responseError;
}

async function validadeFields(email, password, displayName) {
  const displayNameError = validadeDisplayName(displayName);
  const emailError = validateEmail(email);
  const passwordError = validadePassword(password);

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

module.exports = { validadeFields, verifyUserEmail };
