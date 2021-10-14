const { StatusCodes: { CREATED, OK } } = require('http-status-codes');
const { create, listAllCategories } = require('../services/categorieService');

const createNewCategory = async (req, res, next) => {
  try {
    const newCategory = await create(req.body);
    return res.status(CREATED).json(newCategory);
  } catch (e) {
    next(e); 
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const allCategories = await listAllCategories()
    return res.status(OK).json(allCategories)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  createNewCategory,
  getAllCategories,
};