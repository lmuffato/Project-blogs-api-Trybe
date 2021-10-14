const STATUS = require('../util/status');
const categoryService = require('../services/categoryService');

const create = async (req, res, next) => {
  try {
    const { name } = req.body;
    const toReturn = await categoryService.create(name);
    return res.status(STATUS.STATUS_201_CREATED).json(toReturn);
  } catch (e) {
    next(e);
  }
};

const getAll = async (req, res, next) => {
  try {
    const categories = await categoryService.getAll();
    return res.status(STATUS.STATUS_200_OK).json(categories);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
  getAll,
};
