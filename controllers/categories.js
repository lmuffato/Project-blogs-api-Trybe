const { createCategoryService, getAllCategoryService } = require('../services/categories');

// ------------------------------------ CREATE --------------------------------------------- //

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  const { status, data, message } = await createCategoryService(name);

  if (message) return res.status(status).json({ message });

  res.status(status).json(data);
};

// ------------------------------------ GETALL --------------------------------------------- //

const getAllCategoryController = async (_req, res) => {
  const { status, data } = await getAllCategoryService();

  res.status(status).json(data);
};

module.exports = {
  createCategoryController,
  getAllCategoryController,
};
