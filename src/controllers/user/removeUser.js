const UserService = require('../../services/user');

module.exports = async (req, res) => {
  const { id } = req.user;

  await UserService.removeUser(id);

  res.status(204).end();
};