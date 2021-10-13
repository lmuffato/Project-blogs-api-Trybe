const { User } = require('../models'); 

const createUser = async ({ displayName, email, password, image }) => {
  // const { displayName, email, password, image } = user;

  const result = await User.create({ displayName, email, password, image });
  return result;
};

module.exports = {
  createUser,
};
