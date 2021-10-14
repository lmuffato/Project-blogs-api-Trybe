const { User } = require('../../models');

module.exports = async (email = '') => {
  const user = await User.findOne({ where: { email } });

  if (user) return { status: 409, message: 'User already registered' };

  return {};
};