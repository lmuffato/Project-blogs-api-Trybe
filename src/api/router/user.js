const { Router } = require('express');

const {
  validateDisplay,
  validateEmail,
  validatePassword,
  validateImage,
} = require('../validations/users/validates');

const {
  createController,
} = require('../controllers/userController');

const router = Router();

router.post(
  '/',
  validateDisplay,
  validateEmail,
  validatePassword,
  validateImage,
  createController,
);

module.exports = router;