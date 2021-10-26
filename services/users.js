const {User} = require('../models');

const create = async (displayNmae, email, password, image) => {
  const newUser = await User.create(displayNmae, email, password, image);
  return newUser;
};

module.exports = {
  create,
};