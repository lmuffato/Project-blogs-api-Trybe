const { User } = require('../models');

module.exports = async (id) => {
  await User.destroy({ where: { id } });
};