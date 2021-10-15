const userService = require('../services/userService');

const create = async (req, res) => {
  const { status, data } = await userService.create(req.body);
  res.status(status).json(data);
};

const login = async (req, res) => {
  const { status, token } = await userService.login(req.body);
  res.status(status).json({ token });
};

const getAll = async (req, res) => {
  const { status, data } = await userService.getAll();
  res.status(status).json(data);
};

module.exports = {
  create,
  login,
  getAll,
};