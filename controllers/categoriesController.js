const categoriesService = require('../services/categoriesService');

async function create(req, res) {
  const { name } = req.body;

  const { code, created } = await categoriesService.create(name);

  res.status(code).json(created);
}

async function getAll(req, res) {
  const { code, categories } = await categoriesService.getAll();
  
  res.status(code).json(categories);
}

module.exports = {
  create,
  getAll,
};