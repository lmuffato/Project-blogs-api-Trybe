const { Users } = require('../models');

const getUserByEmail = async (email) => {
  const user = await Users.findOne({ where: { email } });

  return user;
};

module.exports = getUserByEmail;
