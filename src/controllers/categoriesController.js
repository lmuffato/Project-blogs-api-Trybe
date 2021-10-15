const { createCategories, getCategories } = require('../services/categoriesService');
const { isRequired } = require('../utils/errorMessages');
const { HTTP_CREATED_STATUS, HTTP_OK_STATUS } = require('../utils/statusHTTP');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { message, code } = isRequired;

  if (!name) return res.status(code).json({ message });

  const category = await createCategories({ name });
  return res.status(HTTP_CREATED_STATUS).json(category);
};

const getAllCategories = async (_req, res) => {
  const categories = await getCategories();
  return res.status(HTTP_OK_STATUS).json(categories);
};

module.exports = { createCategory, getAllCategories };
