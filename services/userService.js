const { User } = require('../models');
const userValidations = require('./validations/userValidations');

const addUsers = async (user) => {
  userValidations.validateName(user.displayName);
  userValidations.validateEmailRequired(user.email);
  userValidations.validateEmail(user.email);
  userValidations.validatePasswordRequired(user.password);
  userValidations.validatePassword(user.password);
  await userValidations.validateEmailAlready(user.email);
  const result = await User.create(user);
  console.log('olá seus vermes capitalistas', result.dataValues);
  return { status: 201, response: result.dataValues };
};

module.exports = {
  addUsers,
};