const { User } = require('../models');
const auth = require('../auth/jwtFunctions');

const createUser = async (displayName, email, password, image) => {
  const create = await User.create(displayName, email, password, image);
  const getEmail = create.email;
  const token = await auth.create(getEmail);
  return { token };
};

const getUsers = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  return user;
};

const getUser = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUser,
};
