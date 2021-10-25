const { createCategoryS } = require('../services/categoryService');
const { STATUS_CREATE } = require('../utils/httpStatus');

const createCategoryC = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await createCategoryS(name);
  return res.status(STATUS_CREATE).json({ id: newCategory.id, name: newCategory.name });
};

module.exports = {
  createCategoryC,
};