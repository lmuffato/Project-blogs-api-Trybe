const UserService = require('../../services/user');

module.exports = async (_req, res) => {
  const users = await UserService.findAllUsers();

  res.status(200).json(users);
};