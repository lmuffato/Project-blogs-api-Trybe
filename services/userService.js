const { User } = require('../models');
const { validateName, validatePassword, validateEmail } = require('./validations');

exports.create = async ({ displayName, email, password, image }) => {
  validateName(displayName);
  validatePassword(password);
  validateEmail(email);
  
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};
