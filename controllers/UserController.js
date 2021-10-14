const userService = require('../services/UserServices');

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  return res.status(201).json({ token: newUser.token });
};

const findUsers = async (_req, res) => {
  const finded = await userService.findUsers();
  return res.status(200).json(finded);
};

module.exports = {
  createUser,
  findUsers,
};