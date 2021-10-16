const database = require('../models');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await database.Categories.create({ name });
  const { id } = newCategory;
  return res.status(201).json({ id, name });
};

module.exports = {
  postCategory,
};
