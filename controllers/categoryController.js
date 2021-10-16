const database = require('../models');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await database.Categories.create({ name });
  const { id } = newCategory;
  return res.status(201).json({ id, name });
};

const getCategories = async (_req, res) => {
  const categories = await database.Categories.findAll({ attributes: ['id', 'name'] });
  return res.status(200).json(categories);
};

module.exports = {
  postCategory,
  getCategories,
};
