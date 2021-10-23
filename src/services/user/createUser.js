const { User } = require('../../models');
const { createToken } = require('../../utils/token');
const { userValidation, emailFormatValidator } = require('../../middlewares/Users');
const { findByEmail } = require('./findByEmail');

const createUser = async (newUser) => {
  const { displayName, email, password, image } = newUser;
  userValidation(displayName, email, password, image);
  emailFormatValidator(email);

  const exists = await findByEmail(email);

  if (exists) {
    return;
  }
  
  const user = await User.create(newUser);
  const userToken = createToken(user);
  return userToken;
};

module.exports = createUser;