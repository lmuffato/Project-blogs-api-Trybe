const { User } = require('../models');

module.exports = async () => {
  const user = await User.findAll({ attributes: { exclude: ['password'] } });
  return user;
};