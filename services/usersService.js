const { User } = require('../models');
const { createToken } = require('../utils/token');
const { CONFLICT_ERROR } = require('../utils/msg');

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

module.exports = { createUser };