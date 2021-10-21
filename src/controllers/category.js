const { categoryServices } = require('../services');
const { status } = require('../messages');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const register = await categoryServices.createCategory(name);
  return res.status(status.created).json(register);
};

const getCategories = async (_req, res) => {
  const listCategories = await categoryServices.getCategories();
  return res.status(status.OK).json(listCategories);
};

module.exports = {
  createCategory,
  getCategories,
};
