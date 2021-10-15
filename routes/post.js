const routes = require('express').Router();
const validateToken = require('../auth/validateToken');
const postController = require('../controllers/post');
const postSchema = require('../schemas/post');
const schemaValidation = require('../middlewares/schemaValidation');

routes.post(
  '/',
  validateToken,
  (req, res, next) => schemaValidation(req, res, next, postSchema),
  postController.create,
);

module.exports = routes;
