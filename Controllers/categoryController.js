const Category = require('../Services/categoryService');

const addNew = async (req, res, next) => {
  const { name } = req.body;
  const result = await Category.create(name);
  if (result.message) return next(result);

  return res.status(201).json(result);
};

const listAll = async (_req, res, next) => {
  const result = await Category.listAll();
  if (result.message) return next(result);

  return res.status(200).json(result);
};

module.exports = {
  addNew,
  listAll,
};
