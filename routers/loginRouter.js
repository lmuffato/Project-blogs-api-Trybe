const express = require('express');

const Router = express.Router();

const {
  validatePassword,
  validateEmail,
} = require('../middlewares');

const { userController } = require('../controllers');

Router.post('/', [
  validateEmail,
  validatePassword,
  userController.login,
]);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router;