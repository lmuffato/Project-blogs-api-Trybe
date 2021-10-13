const rescue = require('express-rescue');
const { StatusCodes: { OK } } = require('http-status-codes');
const { Category } = require('../../models');

module.exports = rescue(async (req, res) => {
    const categories = await Category.findAll();

    res.status(OK).json(categories);
  });
