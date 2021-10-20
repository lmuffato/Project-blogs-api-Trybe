const CustomError = require('../utils/CustomError');

const validateEmail = (email) => {
  const regex = /^\S+@\S+$/;
  if (!email) throw new CustomError(400, '"email" is required');
  if (!regex.test(email)) throw new CustomError(400, '"email" must be a valid email');
};

const validateDisplayName = (displayName) => {
  if (displayName.length < 8) {
    throw new CustomError(400, '"displayName" length must be at least 8 characters long');
  }
};

const validateUniqueUser = (user) => {
  if (user) throw new CustomError(409, 'User already registered');
};

const validatePassword = (password) => {
  if (!password) throw new CustomError(400, '"password" is required');
  if (password.length < 6) {
    throw new CustomError(400, '"password" length must be 6 characters long');
  }
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateUniqueUser,
};