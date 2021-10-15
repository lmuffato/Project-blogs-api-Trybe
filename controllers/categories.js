const { Category } = require('../models');

const create = async (req, res) => {
  const { name } = req.body;
  console.log(req.body)
  console.log('name na create', name)
  const createdCategory = await Category.create(name);
  res.status(201).json(createdCategory);
};

module.exports = {
  create,
};
