const express = require('express');

const Router = express.Router();

const { validateCreateUserForm } = require('../middlewares');
const { userController } = require('../controllers');

Router.post('/', [
  validateCreateUserForm,
  userController.create,
]);

Router.use((err, _req, res, _next) => (
  res.status(400).json(err)));

module.exports = Router;