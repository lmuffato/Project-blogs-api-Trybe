const router = require('express').Router();

const { User } = require('../controllers');
const { validateUserAccess } = require('../middlewares');

router
  .post('/', validateUserAccess, User.login);

module.exports = router;