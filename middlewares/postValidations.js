const { Op } = require('sequelize');
const { Category } = require('../models');

const error = {
  titleRequired: '"title" is required',
  contentRequired: '"content" is required',
  categoryRequired: '"categoryIds" is required',
  categoryIdsNotFound: '"categoryIds" not found',
};

const titleRequired = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: error.titleRequired });
  next();
};

const contentRequired = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: error.contentRequired });
  next();
};

const categoryRequired = (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: error.categoryRequired });
  next();
};

const categoryNotFound = async (req, res, next) => {
  const { categoryIds } = req.body;
  const findAllCategory = await Category.findAll({ where: { id: { [Op.and]: [categoryIds] } } });
  if (findAllCategory.length !== categoryIds.length) {
    return res.status(400).json({ message: error.categoryIdsNotFound });
  }
  next();
};

const validTitleContent = [titleRequired, contentRequired];
const validCategory = [categoryRequired, categoryNotFound];

module.exports = {
  validTitleContent,
  validCategory,
};