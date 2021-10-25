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
  return { status: 201, response: result.dataValues };
};

const getUsers = async (token) => {
  userValidations.validateToken(token);
  userValidations.validateTokenRequired(token);
  const users = await User.findAll();
  const response = users.map((user) => {
    const { dataValues } = user;
    delete dataValues.password;
    return dataValues;
  });
  return { status: 200, response };
};

const getUserById = async (token, id) => {
  userValidations.validateToken(token);
  userValidations.validateTokenRequired(token);
  const result = await User.findOne({ where: { id } });
  userValidations.validateUser(result);
  delete result.dataValues.password;
  return { status: 200, response: result.dataValues };
};

module.exports = {
  addUsers,
  getUsers,
  getUserById,
};