const rescue = require('express-rescue');

const { Category } = require('../models');

const NAME_REQUIRED = {
  code: 400,
  message: '"name" is required',
};

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(NAME_REQUIRED.code).json({ message: NAME_REQUIRED.message });
  }
  const newCategory = await Category.create({ name });
  res.status(201).json(newCategory.dataValues);
});

const getCategories = rescue(async (_req, res) => {
  const allCategories = await Category.findAll();
  res.status(200).json(allCategories);
});

module.exports = { createCategory, getCategories };