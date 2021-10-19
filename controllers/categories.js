const { createCategoryService } = require('../services/categories');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  const { status, data, message } = await createCategoryService(name);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

module.exports = {
  createCategoryController,
};
