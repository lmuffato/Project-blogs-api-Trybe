const express = require('express');
const { post: { create } } = require('../controllers');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/post',
  middlewares.token.tokenValidate,
  middlewares.post.postValidate,
  create);

module.exports = router;
