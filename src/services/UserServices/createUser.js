const { User } = require('../../models');
const UserSchema = require('../../schemas/UserSchema');

module.exports = async (newUserData) => {
  const { error } = UserSchema(newUserData);

  if (error) return { code: 400, message: error.details[0].message };

  const createdUser = await User.create(newUserData);
  return createdUser;
};
