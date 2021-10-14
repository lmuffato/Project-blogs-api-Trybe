const services = require('../services/categories');

const createCategory = async (req, res, next) => {
  const { name } = req.body;

  const response = await services.createCategory(name);

  if (response.code) return next(response);

  return res.status(201).json(response);
};

module.exports = {
  createCategory,
};
