const { User } = require('../../models');

const addUsers = async (displayName, email, password, image) => {
   await User.create(
    {
      displayName,
      email,
      password,
      image,
    },
  );
  return true;
};

const checkEmailExists = async (email) => {
  const exists = await User.findOne({ where: { email } });
  if (exists) return true;
};

module.exports = {
  addUsers,
  checkEmailExists,
};