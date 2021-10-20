const { Categories } = require('../models');

const validateTitle = async (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const validContent = async (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const validCategoryId = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  next();
};

const validCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  const data = await Categories.findOne({ where: { id: categoryIds } });
  if (!data) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = {
  validateTitle,
  validContent,
  validCategoryId,
  validCategoryIds,
};