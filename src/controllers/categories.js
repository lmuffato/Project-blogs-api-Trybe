const { Category } = require('../database/models');
const validation = require('../validations');
const { getStatusCode } = require('../utils/statusCode');

async function createCategory(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { name } = req.body;
    const { status } = getStatusCode('created');

    validation.isRequired(name, 'name');
    validation.verifyToken(token);

    const category = await Category.create({ name });

    res.status(status).json(category);
  } catch (error) {
    next(error);
  }
}

async function getCategories(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { status } = getStatusCode('ok');

    validation.verifyToken(token);

    const categories = await Category.findAll();

    res.status(status).json(categories);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createCategory,
  getCategories,
};
