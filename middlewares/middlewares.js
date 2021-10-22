const { User } = require('../models');

const nameLengthError = {
  status: 400,
  errorMessage: { message: '"displayName" length must be at least 8 characters long' },
};

const emailFormatError = {
  status: 400,
  errorMessage: { message: '"email" must be a valid email' },
};

const emailRequiredError = {
  status: 400,
  errorMessage: { message: '"email" is required' },
};

const passwordLengthError = {
  status: 400,
  errorMessage: { message: '"password" length must be 6 characters long' },
};

const passwordRequiredError = {
  status: 400,
  errorMessage: { message: '"password" is required' },
};

const repeatedEmailError = {
  status: 409,
  errorMessage: { message: 'User already registered' },
};

const nameLengthValidation = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(nameLengthError.status).json(nameLengthError.errorMessage);
  }
  next();
};

const emailValidation = async (req, res, next) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  if (!email) {
    return res.status(emailRequiredError.status).json(emailRequiredError.errorMessage);
  }
  if (regex.test(email) === false) {
    return res.status(emailFormatError.status).json(emailFormatError.errorMessage);
  }
  const sameEmail = await User.findOne({ where: { email } });
  if (sameEmail) {
    return res.status(repeatedEmailError.status).json(repeatedEmailError.errorMessage);
  }
  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(passwordRequiredError.status).json(passwordRequiredError.errorMessage);
  }
  if (password.length < 6) {
    return res.status(passwordLengthError.status).json(passwordLengthError.errorMessage);
  }
  next();
};

module.exports = {
  nameLengthValidation,
  emailValidation,
  passwordValidation,
}; 
