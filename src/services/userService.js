const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userSchema = require('../utils/schemas/userSchema');

const create = async (displayName, email, password, image) => {
  const validateUser = userSchema.userValidations(displayName, password);
  if (validateUser.message) return validateUser;

  const validateEmail = await userSchema.emailValidations(email);
  if (validateEmail.message) return validateEmail;

  const { password: _, ...userPayload } = await User.create({
    displayName, email, password, image,
  });
  const SECRET = 'xAbLaU';
  const token = jwt.sign(userPayload, SECRET);

  return { status: 201, token };
};

module.exports = {
  create,
};