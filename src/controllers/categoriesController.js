const { createCategories } = require('../services/categoriesService');
const { isRequired } = require('../utils/errorMessages');
const { HTTP_CREATED_STATUS } = require('../utils/statusHTTP');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const { message, code } = isRequired;

  if (!name) return res.status(code).json({ message });

  const category = await createCategories({ name });
  return res.status(HTTP_CREATED_STATUS).json(category);
};

module.exports = { createCategory };
