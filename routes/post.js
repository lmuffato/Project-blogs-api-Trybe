const routes = require('express').Router();
const validateToken = require('../auth/validateToken');
const postController = require('../controllers/post');
const postSchema = require('../schemas/post');
const schemaValidation = require('../middlewares/schemaValidation');
const categoriesExists = require('../middlewares/categoriesExists');

routes.post(
  '/',
  validateToken,
  (req, res, next) => schemaValidation(req, res, next, postSchema),
  categoriesExists,
  postController.create,
);

module.exports = routes;
