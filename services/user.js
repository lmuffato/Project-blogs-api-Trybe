const { User } = require('../models');
const { token } = require('../utils');

const create = async (user) => {
  const { email, displayName } = user;
  const userToken = token.create(email, displayName);
  await User.create(user);
  return {
    status: 201,
    message: { token: userToken },
  };
};

module.exports = { create };
