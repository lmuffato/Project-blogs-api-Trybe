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

const getAllUsers = async (_req, res) => User.findAll(
  { attributes: ['id', 'displayName', 'email', 'image'] },
).then((Users) => res.status(200).json(Users))
.catch((error) => {
  console.log(error);
  res.status(404).json(error);
});

module.exports = {
  create,
  findUserByEmail,
  getAllUsers,
};