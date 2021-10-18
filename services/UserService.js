const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { 
  validateEmail, 
  validateCreateUser, 
  validateLogin,
} = require('../validations/UserValidations');

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

const login = async (email, password) => {
  const validationLogin = await validateLogin(email, password);
  if (validationLogin.message) return validationLogin;

  const user = await User.findOne({ where: { email } });
  if (!user) return { code: 400, message: 'Invalid fields' };

  const { password: _, ...dataValues } = user;
  
  const token = jwt.sign(dataValues, SECRET);
  return { token };
};

module.exports = {
  createUser,
  login,
};