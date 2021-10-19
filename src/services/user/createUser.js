const { User } = require('../../models');
const { createToken } = require('../../utils/token');

const createUser = async (newUser) => {
  const user = await User.create(newUser);
  const userToken = createToken(user);
  return userToken;
};

module.exports = createUser;