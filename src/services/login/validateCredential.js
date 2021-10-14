const { User } = require('../../models');

module.exports = async ({ email, password }) => {
  const userSearch = await User.findOne({ where: { email, password } });

  if (!userSearch) return { status: 400, message: 'invalid fields' };
  
  return userSearch;
};