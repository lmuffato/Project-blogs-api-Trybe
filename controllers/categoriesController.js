const { Category } = require('../models');

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;
const HTTP_NOT_FOUND = 404;

const NAME_REQUIRED = '"name" is required';

const createCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(HTTP_BAD_REQUEST).json({ message: NAME_REQUIRED });
  }

  const category = await Category.create({ name });
  return res.status(HTTP_CREATED).json(category);
};

const findAllCategories = async (_req, res) => {
  try {
    const categories = await Category.findAll({
      attributes: ['id', 'name'],
    });
    return res.status(HTTP_OK).json(categories);
  } catch (err) {
    return res.status(HTTP_NOT_FOUND).json({ message: err.message });
  }
};

module.exports = {
  createCategory,
  findAllCategories,
};