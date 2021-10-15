const { User } = require('../models');

const create = async (userData) => {
  const { displayName, email, password, image } = userData;
  const newUser = await User.create({ displayName, email, password, image });
  return { status: 201, data: newUser };
};

module.exports = {
  create,
};