const UserService = require('../../services/user');

module.exports = async (req, res) => {
  const { id } = req.params;
  const user = await UserService.findByPk(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(user);
};