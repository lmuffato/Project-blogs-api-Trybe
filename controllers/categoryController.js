const categoryService = require('../services/categoryService');

const create = async (req, res) => {
  const { status, data } = await categoryService.create(req.body);
  res.status(status).json(data);
};

const getAll = async (req, res) => {
  const { status, data } = await categoryService.getAll();
  res.status(status).json(data);
};

module.exports = {
  create,
  getAll,
};