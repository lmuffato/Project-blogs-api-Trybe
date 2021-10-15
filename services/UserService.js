const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { validateEmail, validateCreateUser } = require('../validations/UserValidations');

const SECRET = 'blogsApi';

const createUser = async (displayName, email, password, image) => {
  const validationUser = validateCreateUser(displayName, password);
  if (validationUser.message) return validationUser;

  const validationEmail = await validateEmail(email);
  if (validationEmail.message) return validationEmail;

  const newUser = await User.create({ displayName, email, password, image });
  const { password: _, ...dataValues } = newUser;

  const token = jwt.sign(dataValues, SECRET);
  return { token };
};

module.exports = {
  createUser,
};