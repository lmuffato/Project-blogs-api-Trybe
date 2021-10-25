const categoriesService = require('../services/categoriesService');

const addCategories = async (req, res) => {
  const token = req.headers.authorization;
  const { status, response } = await categoriesService.addCategories(req.body, token);
  return res.status(status).json(response);
};

module.exports = {
  addCategories,
};