const service = require('../services/userService');

const createUser = async (req, res) => {
  const newUser = await service.createUser(req);
  
  if (!newUser) return (res.status(400).json({ message: 'Unable to create new user' }));
  
  return (res.status(201).json(newUser));
};

const findAllUsers = async (_req, res) => {
  const users = await service.findAllUsers();

  if (!users) return res.status(404).json({ message: 'User not found' });
  
  return res.status(200).json(users);
};

const findUser = async (req, res) => {
  const { id } = req.params;

  const user = await service.findUser(id);

  if (!user) return res.status(404).json({ message: 'User does not exist' });
  
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  findAllUsers,
  findUser,
};
