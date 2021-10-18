const express = require('express');

const Router = express.Router();

const {
  validateToken,
  validateTitle,
  validateContent,
  validateCategoryId,
} = require('../middlewares');

const { postController } = require('../controllers');

Router.post('/', [
  validateToken,
  validateTitle,
  validateContent,
  validateCategoryId,
  postController.create,
]);

Router.get('/:id', [
  validateToken,
  postController.getById,
]);

Router.get('/', [
  validateToken,
  postController.getAll,
]);

Router.use((err, _req, res, _next) => {
  const { code, message } = err;
  return res.status(code).json({ message });
});

module.exports = Router;