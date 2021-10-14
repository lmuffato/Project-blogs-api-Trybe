const routes = require('express').Router();

const validateToken = require('../auth/validateToken');
const userController = require('../controllers/user');
const schemaValidation = require('../middlewares/schemaValidation');
const userSchema = require('../schemas/user');

routes.post(
  '/',
  (req, res, next) => schemaValidation(req, res, next, userSchema),
  userController.create,
);

routes.get('/', validateToken, userController.get);

module.exports = routes;
