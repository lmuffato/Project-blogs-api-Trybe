const { User } = require('../models');
const { token } = require('../utils');

const create = async (user) => {
  const userToken = await token.create(user.email, user.displayName);
  await User.create(user);
  return {
    status: 201,
    message: { token: userToken },
  };
};

module.exports = { create };
