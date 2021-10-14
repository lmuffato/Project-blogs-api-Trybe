const { User } = require('../models');
const { createToken } = require('../utils/token');
const { CONFLICT_ERROR, USER_DOES_NOT_EXIST } = require('../utils/msg');

const checkEmail = async (email) => {
  const checkEmails = await User.findOne({ where: { email } });
  return checkEmails;
};

const createUser = async (newUser) => {
  const { email } = newUser;
  const checkEmails = await checkEmail(email);
  if (checkEmails) throw CONFLICT_ERROR;
  const { password, ...user } = await User.create(newUser);
  return createToken(user);
};

const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

const getByID = async (id) => {
  const users = await User.findByPk(id);
  if (!users) throw USER_DOES_NOT_EXIST;
  console.log(users);
  const { password: _, ...user } = users.dataValues;
  return user;
  // const user = await User.findOne({ where: { id } });
  // if (!user) throw USER_DOES_NOT_EXIST;
  // return user;
};

module.exports = { createUser, getAllUsers, getByID };