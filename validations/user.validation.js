const Joi = require('joi');

function displayNameValidate(displayName) {
  const displayNameValidation = Joi.string().min(8).required();
  const displayNameIsValid = displayNameValidation.validate(displayName);

  return !!displayNameIsValid.error;
}

function emailValidate(email) {
  const emailValidation = Joi.string().email().required();
  const emailIsValid = emailValidation.validate(email);

  return !!emailIsValid.error;
}

function passwordValidate(password) {
  const passwordValidation = Joi.string().min(6).required();
  const passwordIsValid = passwordValidation.validate(password);

  return !!passwordIsValid.error;
}

function userValidate(request, response, next) {
  const { displayName, email, password } = request.body;

  const displayNameMessage = '"displayName" length must be at least 8 characters long';
  const emailMessage = '"email" must be a valid email';
  const passwordMessage = '"password" length must be 6 characters long';

  switch (true) {
    case displayNameValidate(displayName):
      return response.status(400).json({ message: displayNameMessage });
    case emailValidate(email):
      return response.status(400).json({ message: emailMessage });
    case passwordValidate(password):
      return response.status(400).json({ message: passwordMessage });
    default:
      return next();
  }
}

function userRequired(request, response, next) {
  const { email, password } = request.body;

  const emailMessageUndefined = '"email" is required';
  const passwordMessageUndefined = '"password" is required';

  switch (undefined) {
    case email:
      return response.status(400).json({ message: emailMessageUndefined });
    case password:
      return response.status(400).json({ message: passwordMessageUndefined });
    default:
      return next();
  }
}

module.exports = { userValidate, userRequired };