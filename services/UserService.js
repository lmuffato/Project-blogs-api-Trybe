const { User } = require('../models');
const { getToken } = require('../middleware/getToken');

const createUser = async ({ displayName, email, password, image }) => {
  const existingUser = await User.findOne({ where: { email } });
    
  if (existingUser) {
    return 'exists';
  }
  User.create({ displayName, email, password, image });
  return getToken(email, password);
};
const checkUser = async ({ email, password }) => {
const registered = await User.findOne({ where: { email, password } });
console.log(registered);
  if (!registered) {
    return '!exists';
  }
  return getToken(email, password);
};

const findAll = async () => {
  const users = await User.findAll();
  return users;
};

const searchUser = async ({ email }) => {
  const searchEmail = await User.findOne({ where: { email } });
    if (searchEmail === null) {
      return '!exist';
    }
    return searchEmail;
  };

  const findById = async ({ id }) => {
    const user = await User.findByPk(+id);
      if (user === null) {
        return '!exist';
      }
      return user;
    };

  module.exports = { createUser, checkUser, searchUser, findAll, findById };