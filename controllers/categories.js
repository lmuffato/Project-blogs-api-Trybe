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

const getCatIds = async (catId) => Category.findAll({ where: { id: catId } });

module.exports = {
  create,
  getAll,
  getCatIds,
};
