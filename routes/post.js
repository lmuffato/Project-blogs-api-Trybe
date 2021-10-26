const { Router } = require('express');
const { Post } = require('../controllers');
const { authMiddleware, validatePostData,
  validatePostDataUpdate, validateAuthUpdate } = require('../middlewares');

const router = Router();

router
  .post('/', authMiddleware, validatePostData, Post.create)
  .get('/:id', authMiddleware, Post.getById)
  .get('/', authMiddleware, Post.getAll)
  .put('/:id', authMiddleware, validateAuthUpdate, validatePostDataUpdate, Post.update);

module.exports = router;