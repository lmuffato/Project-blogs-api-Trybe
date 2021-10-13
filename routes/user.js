const routes = require('express').Router();

const userController = require('../controllers/user');
const schemaValidation = require('../middlewares/schemaValidation');
const userSchema = require('../schemas/user');

routes.post(
  '/',
  (req, res, next) => schemaValidation(req, res, next, userSchema),
  userController.create,
);

module.exports = routes;
