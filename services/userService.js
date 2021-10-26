// importar models
// importar criação de token

const { createToken } = require('../utils/token');
const { User } = require('../models');

const createUserS = async (newUser) => {
  const user = await User.create(newUser);
  const token = createToken(user);
  return token;
};

const findByEmailS = async (email) => {
  const emailExists = await User.findOne({ where: { email } });
  return emailExists;
};

const getUsersS = async () => {
  const users = await User.findAll();
  return users;
};

const getByIdS = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) {
    return;
  }
  return user;
};

module.exports = {
  createUserS,
  findByEmailS,
  getUsersS,
  getByIdS,
};