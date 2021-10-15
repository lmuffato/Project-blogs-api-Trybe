const express = require('express');

const Router = express.Router();

const { validateCreateUserForm } = require('../middlewares');
const { userController } = require('../controllers');

Router.post('/', [
  validateCreateUserForm,
  userController.create,
]);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router;