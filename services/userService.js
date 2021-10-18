const { User } = require('../models');

exports.create = async ({ displayName, email, password, image }) => {
  const newUser = await User.create({ displayName, email, password, image });

  console.log(newUser);

  return newUser;
};
