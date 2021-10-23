const { User } = require('../../models');

const findAll = async () => {
  const usersList = User.findAll();

  return usersList;
};

module.exports = findAll;