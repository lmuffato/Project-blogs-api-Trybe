const { Category } = require('../database/models');
const validation = require('../validations');
const { getStatusCode } = require('../utils/statusCode');

async function createCategory(req, res, next) {
  try {
    const token = req.headers.authorization;
    const { name } = req.body;

    validation.isRequired(name, 'name');
    validation.verifyToken(token);

    const category = await Category.create({ name });

    res.status(getStatusCode('created')).json(category);
  } catch (error) {
    next(error);
  }
}

async function getCategories(req, res, next) {
  try {
    const token = req.headers.authorization;

    validation.verifyToken(token);

    const categories = await Category.findAll();

    res.status(getStatusCode('ok')).json(categories);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createCategory,
  getCategories,
};
