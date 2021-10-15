const usersServices = require('../Services/userServices');
const userModels = require('../Models/userModels');

const addUsers = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const { code, message, token } = await usersServices
    .addUsers(displayName, email, password, image);

  return res.status(code).json({ message, token });
};

const getUsers = async (req, res) => {
  const { code, users } = await userModels.getUsers();

  return res.status(code).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { code, message, user } = await userModels.getUserById(id);

  return res.status(code).json({ message, ...user });
};

module.exports = {
  addUsers,
  getUsers,
  getUserById,

};