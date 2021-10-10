const userService = require('../services/userService');
const { User } = require('../models');

const getById = async (req, res) => {
  const { status, data, message } = await userService.getById(req.params.id);

  if (message) return res.status(status).json(message);

  return res.status(status).json(data);
};

const getAll = async (_req, res) => {
  const { status, data, message } = await userService.getAll();

  if (message) return res.status(status).json(message);

  return res.status(status).json(data);
};

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const check = userService.check(data);
  if (check) return res.status(check.status).json({ message: check.message });
  const { displayName, email, password, image } = data;

  const haveUser = await User.findOne({ where: { email } });

  if (haveUser) return res.status(409).json({ message: 'User already registered' });

  await User.create({ displayName, email, password, image });
  return res.status(201).json({ message: 'User Created' });
  } catch (err) {
    next({ status: 500, error: err });
  }
};

module.exports = {
  create,
  getAll,
  getById,
};
