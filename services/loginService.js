const jwt = require('jsonwebtoken');
const ERROR = require('../helpers/errors');
const { User } = require('../models');

require('dotenv').config();

const checkPassword = (password) => {
  if (password === undefined) return ERROR.PASSWORD_IS_REQUIRED;
  if (password === '') return ERROR.PASSWORD_IS_EMPTY;
  return false;
};

const checkEmail = (email) => {
  if (email === undefined) return ERROR.EMAIL_IS_REQUIRED;
  if (email === '') return ERROR.EMAIL_IS_EMPTY;
};

const login = async ({ email, password }) => {
  const emailIsValid = checkEmail(email);
  if (emailIsValid) return emailIsValid;

  const passwordIdValid = checkPassword(password);
  if (passwordIdValid) return passwordIdValid;

  const user = await User.findOne({ where: { email, password } });

  if (!user) return ERROR.INVALID_FIELDS;
   
  const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET, {
    expiresIn: 300,
  });
  return { token, code: 200 };
};

module.exports = {
  login,
};
