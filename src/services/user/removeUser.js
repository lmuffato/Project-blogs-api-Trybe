const { User } = require('../../models');

module.exports = async (userId) => {
  await User.destroy({ where: { id: userId } });
};