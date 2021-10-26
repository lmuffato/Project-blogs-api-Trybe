const { Router } = require('express');
const { User } = require('../controllers');
const { validateUserData, authMiddleware } = require('../middlewares');

const router = Router();

router
  .delete('/me', authMiddleware, User.exclude)
  .post('/', validateUserData, User.create)
  .get('/:id', authMiddleware, User.getById)
  .get('/', authMiddleware, User.getAll);

module.exports = router;