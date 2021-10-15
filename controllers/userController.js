const { User } = require('../models');
const tokenGenerator = require('../auth/tokenGenerator');
const { ERROR_USER_EXISTS } = require('../utils/errors');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userData = { password, email };
  const token = tokenGenerator(userData);

  const createdUser = await User.create({ displayName, email, password, image })
    .then(() => {
      res.status(201).json({ token });
    }).catch(() => {
      res.status(ERROR_USER_EXISTS.error.status)
        .json({ message: ERROR_USER_EXISTS.error.message });
    });
    return createdUser;
};

const findUserByEmail = async (email) => {
  const userFound = await User.findOne({ where: { email } });
  return userFound;
};

module.exports = {
  create,
  findUserByEmail,
};