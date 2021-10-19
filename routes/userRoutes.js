const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
  .get(authController.verify, userController.getAll)
  .post(userController.create);

module.exports = router;