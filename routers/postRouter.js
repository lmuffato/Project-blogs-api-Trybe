const express = require('express');

const router = express.Router();

const { categoryIdValidation, postValidation } = require('../validations/postValidation');

const { tokenValidation } = require('../token/tokenValidation');

const { createPost } = require('../controllers/postController');

router.post('/',
  postValidation,
  categoryIdValidation,
  tokenValidation,
  createPost);

module.exports = router;