const rescue = require('express-rescue');
const validaToken = require('../middleware/token');
const categoryService = require('../services/categoryService');

const httpStatus = require('../middleware/httpCodes');

const createCategory = [
  validaToken,
  rescue(async (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res.status(httpStatus.BAD_REQUEST).json({ message: '"name" is required' });
    }
    const category = await categoryService.createCategory(name);
    return res.status(httpStatus.CREATED).json(category);
  }),
];

module.exports = {
  createCategory,
};
