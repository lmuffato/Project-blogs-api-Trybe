const userService = require('../services/user');

const { User } = require('../models');

const findById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.findById(id);
  return res.status(result.status).json(result.response);
};

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { codeError, message, token } = await userService
    .create(displayName, email, password, image);
  if (token) {
    return res.status(201).json({ token });
  }
  if (codeError === 'wrong request format') {
    return res.status(400).json({ message });
  }
  if (codeError === 'conflict detected') {
    return res.status(409).json({ message });
  }
  return res.status(500).json({ message });
};

const getAll = async (_req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.user;
  try {
    await User.destroy({ where: { id } });
    return res.status(204).send();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  findById,
  create,
  getAll,
  deleteById,
};