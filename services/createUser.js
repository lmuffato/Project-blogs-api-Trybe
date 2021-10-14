const { User } = require('../models'); 

const createUser = async (user) => {
  // const { displayName, email, password, image } = user;

  // console.log(displayName, email, password, image, 'SERVICEEEEE');

  const result = await User.create(user);
  return result;
};

module.exports = {
  createUser,
};
