const jwt = require('jsonwebtoken');
const ERROR = require('../helpers/errors');
const { User } = require('../models');

const checkUser = async ({ email }) => User.findOne({ where: { email } });

const checkPassword = (password) => {
  if (!!password === false) return ERROR.PASSWORD_IS_REQUIRED;
  if (password.length < 6) return ERROR.LESS_THAN_6;
  return false;
};

const checkEmail = (email) => {
  if (!!email === false) return ERROR.EMAIL_IS_REQUIRED;
  if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return ERROR.EMAIL_IS_NOT_VALID;
  return false;
};

const validations = ({ displayName, email, password }) => {
  if (displayName.length < 8) return ERROR.LESS_THAN_8;
  const emailIsValid = checkEmail(email);
  if (emailIsValid) return emailIsValid;
  const passwordIsValid = checkPassword(password);
  if (passwordIsValid) return passwordIsValid;
  return false;
};

const create = async ({ displayName, email, password, image }) => {
  const isNotValid = validations({ displayName, email, password });
  
  if (isNotValid) return isNotValid;
  
  const check = await checkUser({ email });
  
  if (check) return ERROR.USER_ALREADY_REGISTERED;
  
  const { dataValues } = await User.create({ displayName, email, password, image });

  const token = jwt.sign({ id: dataValues.id }, process.env.JWT_SECRET, {
    expiresIn: 300,
  });

  return { token, code: 201 };
};

const getUsers = async () => {
  let users = await User.findAll();
  if (!users) users = [];
  return users;
};

module.exports = {
  create,
  getUsers,
};
