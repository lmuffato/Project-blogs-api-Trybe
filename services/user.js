const { User } = require('../models');
const { token } = require('../utils');
const { CREATED, OK } = require('../utils/status');

const create = async (user) => {
  const { email, displayName } = user;
  const userToken = token.create(email, displayName);
  await User.create(user);
  return {
    status: CREATED,
    message: { token: userToken },
  };
};

const getAll = async () => {
  const users = await User.findAll();
  return {
    status: OK,
    message: users,
  };
};

module.exports = { create, getAll };
