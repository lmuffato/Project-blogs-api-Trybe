const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;
  const createdCategory = await Category.create({ name });
  res.status(201).json(createdCategory);
};

const getAll = async (_req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
};

module.exports = {
  create,
  getAll,
};
