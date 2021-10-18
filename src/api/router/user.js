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
  readByIdController,
  deleteController,
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

router.get(
  '/:id',
  validateToken,
  readByIdController,
);

router.delete(
  '/me',
  validateToken,
  deleteController,
);

module.exports = router;