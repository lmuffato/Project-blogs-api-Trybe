const { User } = require('../models');
const { status: { CREATED, OK, NOT_FOUND }, token } = require('../utils');

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

const getOne = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    return {
      status: NOT_FOUND,
      message: { message: 'User does not exist' },
    };
  }
  return {
    status: OK,
    message: user,
  };
};
module.exports = { create, getAll, getOne };
