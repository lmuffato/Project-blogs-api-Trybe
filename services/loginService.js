const { User } = require('../models');
const { createToken } = require('../utils/token');
const { INVALID_FIELDS } = require('../utils/msg');

const checkLogin = async (email) => {
  const addUser = await User.findOne({ where: { email } });
  return addUser;
};

const login = async ({ email, password: check }) => {
  const addUser = await checkLogin(email);
  console.log(addUser, 'USUAAAAAARIO');
  if (!addUser) throw INVALID_FIELDS;
  const { password, ...user } = await User.findOne({ where: { email, password: check } });
  return createToken(user);
};

module.exports = { login };