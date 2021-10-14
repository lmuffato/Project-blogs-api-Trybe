const routes = require('express').Router();

const schemaValidation = require('../middlewares/schemaValidation');
const validateToken = require('../auth/validateToken');
const categorySchema = require('../schemas/category');

const categoriesController = require('../controllers/categories');

routes.post(
  '/',
  validateToken,
  (req, res, next) => schemaValidation(req, res, next, categorySchema),
  categoriesController.create,
);

module.exports = routes;
