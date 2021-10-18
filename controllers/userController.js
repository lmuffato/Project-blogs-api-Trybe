const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const user = await userServices.createUser(req.body);
  if (user === 'exist') {
    return res.status(409).json({ message: 'User already registered' });
  }
  return res.status(201).json(user);
};

const getUser = async (_req, res) => {
  const users = await userServices.getUser();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getUserById(id);
  if (user === undefined) {
    return res.status(404).json({ message: 'User does not exist' });
  }

  return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUserById,
  getUser,
};