const router = require('express').Router();

const { User } = require('../controllers');
const { validateUserData, authMiddleware } = require('../middlewares');

router
  .post('/', validateUserData, User.create)
  .get('/', authMiddleware, User.getAll);

module.exports = router;