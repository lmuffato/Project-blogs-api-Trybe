const { User } = require('../models');
const auth = require('../auth/jwtFunctions');

const createUser = async (displayName, email, password, image) => {
  const create = await User.create(displayName, email, password, image);
  const getEmail = create.email;
  const token = await auth.create(getEmail);
  return { token };
};

module.exports = {
  createUser,
};
