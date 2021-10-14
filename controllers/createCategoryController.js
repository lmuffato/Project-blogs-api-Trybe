const rescue = require('express-rescue');
const { StatusCodes: { CREATED, OK } } = require('http-status-codes');
const service = require('../services/categoryService');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
    const result = await service.createCategory({ name });
    res.status(CREATED).json(result);
});

const findAllCategories = rescue(async (req, res) => {
  const result = await service.findAllCategories();
  res.status(OK).json(result);
});

module.exports = {
  createCategory,
  findAllCategories,
};