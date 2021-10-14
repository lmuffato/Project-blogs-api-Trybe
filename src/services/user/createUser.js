const { User } = require('../../models');
const UserSchema = require('../../schemas/user');

module.exports = async (newUserData) => {
  const { error } = UserSchema.UserValidations(newUserData);

  // const userExists = UserSchema.userEmailExists(newUserData.email);

  // if (userExists.message) return userExists;

  if (error) return { status: 400, message: error.details[0].message };

  const createdUser = await User.create(newUserData);
  return createdUser;
};
