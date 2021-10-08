const Users = require('../services/users.js');

const getAll = async (_req, res) => {
  const { status, data, message } = await Users.getAll();
  if (message) return res.status(status).json(message);

  res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Users.getById(id);
  if (message) return res.status(status).json(message);

  res.status(status).json(data);
};

const create = async (req, res) => {
  const { status, data, message } = await Users.create(req.body);
  if (message) return res.status(status).json(message);

  res.status(status).json(data);
};

const remove = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Users.remove(id);
  if (message) return res.status(status).json(message);

  res.status(status).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { status, data, message } = await Users.update(id, req.body);
  if (message) return res.status(status).json(message);

  res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};