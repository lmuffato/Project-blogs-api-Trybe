const { User } = require('../../models');

const findById = async (id) => {
  const user = User.findOne({ where: { id } });

  if (!user) {
    return;
  }

  return user;
};

module.exports = findById;