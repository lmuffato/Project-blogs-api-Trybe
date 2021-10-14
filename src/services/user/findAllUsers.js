const { User } = require('../../models');

module.exports = async () => {
  const users = await User.findAll();

  return users;
};