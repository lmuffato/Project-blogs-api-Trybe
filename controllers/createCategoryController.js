const rescue = require('express-rescue');
const { StatusCodes: { CREATED } } = require('http-status-codes');
const service = require('../services/categoryService');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
    const result = await service.createCategory({ name });
    res.status(CREATED).json(result);
});

module.exports = {
  createCategory,
};