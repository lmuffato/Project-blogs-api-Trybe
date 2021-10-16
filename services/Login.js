const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = 'aiiipapaiii';

const EMAIL_REQUIRED = {
  code: 400,
  message: '"email" is required',
};

const EMAIL_EMPTY = {
  code: 400,
  message: '"email" is not allowed to be empty',
};

const PASSWORD_REQUIRED = {
  code: 400,
  message: '"password" is required',
};

const PASSWORD_EMPTY = {
  code: 400,
  message: '"password" is not allowed to be empty',
};

const USER_INVALID = {
  code: 400,
  message: 'Invalid fields',
};

const validateLogin = (email, password) => {
  if (email === undefined) return EMAIL_REQUIRED;
  if (email === '') return EMAIL_EMPTY;
  if (password === undefined) return PASSWORD_REQUIRED;
  if (password === '') return PASSWORD_EMPTY;
  return null;
};

const validateCredentials = async (email) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return USER_INVALID;
};

const userLogin = async (email, password) => {
  const isValid = validateLogin(email, password);
  if (isValid) return isValid;
  const isRegistered = await validateCredentials(email);
  if (isRegistered) return isRegistered;
  const user = await User.findOne({ where: { email } });
  const { dataValues } = user;
  const { password: _, ...userPayload } = dataValues;
  const token = jwt.sign(userPayload, SECRET);
  return { code: 200, token };
};

module.exports = { userLogin };