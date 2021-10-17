const express = require('express');

const Router = express.Router();

const {
  validateToken,
  validateName,
} = require('../middlewares');

const { categoryController } = require('../controllers');

Router.post('/', [
  validateToken,
  validateName,
  categoryController.create,
]);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router;