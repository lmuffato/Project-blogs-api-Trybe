const jwt = require('jsonwebtoken');
const { User } = require('../models');
const userSchema = require('../utils/schemas/userSchema');

const JWT_SECRET = 'xAbLaU';

const create = async (displayName, email, password, image) => {
  const validateUser = userSchema.userValidations(displayName, password);
  if (validateUser.message) return validateUser;

  const validateEmail = await userSchema.emailValidations(email);
  if (validateEmail.message) return validateEmail;

  const { password: _, ...userPayload } = await User.create({
    displayName, email, password, image,
  });
  const token = jwt.sign(userPayload, JWT_SECRET);

  return { status: 201, token };
};

const findByCredentials = async (email, password) => {
  const validateLogin = userSchema.loginValidations(email, password);
  console.log(validateLogin);
  
  if (validateLogin.message) return validateLogin;

  const user = await User.findOne({ where: { email } });
  if (!user) return { status: 400, message: 'Invalid fields' };

  const { password: _, ...userPayload } = user;
  const token = jwt.sign(userPayload, JWT_SECRET);

  return { status: 200, token };
};

module.exports = {
  create,
  findByCredentials,
};