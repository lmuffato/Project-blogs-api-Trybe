const express = require('express');
const { user: { create } } = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/user',
  middlewares.user.nameValidate,
  middlewares.email.emailValidate,
  middlewares.email.emailExists,
  middlewares.password.passwordValidate,
  create);

module.exports = router;