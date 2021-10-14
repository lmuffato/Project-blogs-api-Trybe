const { StatusCodes: { CREATED } } = require('http-status-codes');
const { create } = require('../services/categorieService');

const createNewCategory = async (req, res, next) => {
  try {
    const newCategory = await create(req.body);
    return res.status(CREATED).json(newCategory);
  } catch (e) {
    next(e); 
  }
};

module.exports = {
  createNewCategory,
};