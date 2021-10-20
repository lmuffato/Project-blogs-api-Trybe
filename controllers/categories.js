const categoriesService = require('../services/categories');

async function createCategories(req, res, _next) {
  const { status, data, message } = await categoriesService.createCategories(req.body);
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
}

async function getAllCategories(_req, res, _next) {
  const { status, message, data } = await categoriesService.getAllCategories();
  if (message) {
    return res.status(status).json({ message });
  }
  return res.status(status).json(data);
}

module.exports = { createCategories, getAllCategories };