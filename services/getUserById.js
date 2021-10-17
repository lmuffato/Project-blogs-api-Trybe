const { User } = require('../models');
const { USER_DOES_NOT_EXIST } = require('../utils/errorMessages');

module.exports = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!user) throw USER_DOES_NOT_EXIST;
  return user;
};