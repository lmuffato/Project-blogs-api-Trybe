const { Router } = require('express');
const { User } = require('../controllers');
const { validateUserData, authMiddleware } = require('../middlewares');

const router = Router();

router
  .get('/:id', authMiddleware, User.getById)
  .get('/', authMiddleware, User.getAll)
  .post('/', validateUserData, User.create)
  .delete('/me', authMiddleware, User.exclude);

module.exports = router;