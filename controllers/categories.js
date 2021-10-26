const services = require('../services');

const create = async (req, res) => {
  const { name } = req.body;
  const catefory = await services.categories.create(name);
  return res.status(catefory.status).json(catefory.message);
};

const getAll = async (_req, res) => {
  const catefories = await services.categories.getAll();
  return res.status(catefories.status).json(catefories.message);
};

module.exports = { create, getAll };
