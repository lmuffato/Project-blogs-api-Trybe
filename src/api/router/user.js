const { Router } = require('express');

const {
  validateDisplay,
  validateEmail,
  validatePassword,
  validateImage,
  validateToken,
} = require('../validations/users/validates');

const {
  createController,
  readAllController,
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

router.get(
  '/',
  validateToken,
  readAllController,
);

module.exports = router;