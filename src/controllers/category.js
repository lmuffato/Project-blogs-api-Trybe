const { categoryServices } = require('../services');
const { status } = require('../messages');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const register = await categoryServices.createCategory(name);
  return res.status(status.created).json(register);
};

module.exports = {
  createCategory,
};
