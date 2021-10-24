const express = require('express');
const { user: { create, getAll } } = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/user',
  middlewares.user.nameValidate,
  middlewares.email.emailValidate,
  middlewares.email.emailExists,
  middlewares.password.passwordValidate,
  create);

router.get('/user', middlewares.token.tokenValidate, getAll);

module.exports = router;