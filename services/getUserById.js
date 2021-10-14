const { User } = require('../models');
const errorMessages = require('../utils/errorMessages');

module.exports = async (id) => {
  const user = await User.findOne({ where: { id } });
  if (!user) throw errorMessages.USER_DOES_NOT_EXIST;
  return user;
};