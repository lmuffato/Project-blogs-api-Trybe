const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
  .get(authController.verify, postController.getAll)
  .post(authController.verify, postController.create);

module.exports = router;