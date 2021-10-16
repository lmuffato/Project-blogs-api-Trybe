const { User } = require('../models');
const errorMessage = require('../utils/errorMessages');

const verifyIfEmailAlreadyExists = async (email) => {
  const checkEmail = await User.findOne({ where: { email } });
  return checkEmail;
};

module.exports = async (displayName, email, password, image) => {
  const emailChecked = await verifyIfEmailAlreadyExists(email);
  if (emailChecked) throw errorMessage.EMAIL_ALREADY_EXISTS;
  User.create({ displayName, email, password, image });
};
