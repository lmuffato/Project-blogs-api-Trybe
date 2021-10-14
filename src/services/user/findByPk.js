const { User } = require('../../models');

module.exports = async (id) => {
  const user = await User.findByPk(id);

  return user;
};