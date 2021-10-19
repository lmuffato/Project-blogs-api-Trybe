const { User } = require('../../models');

const findByEmail = async (email) => {
  const exists = User.findOne({ where: { email } });

  return exists;
};

module.exports = findByEmail;