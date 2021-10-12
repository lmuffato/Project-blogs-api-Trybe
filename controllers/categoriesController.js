const { Category } = require('../models');
const { error13 } = require('../utils/errors');

const create = async (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res.status(error13.error.status).json({ message: error13.error.message });
  }
  
  const category = await Category.create({ name });
  
  res.status(201).json(category);
};

module.exports = {
  create,
};