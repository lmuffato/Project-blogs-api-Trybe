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

const getCategories = async (_req, res) => {
  Category.findAll()
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Deu ruim' });
    });
};

module.exports = {
  create,
  getCategories,
};