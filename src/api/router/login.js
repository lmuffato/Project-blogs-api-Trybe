const { Router } = require('express');

const {
  validateEmail,
  validatePassword,
} = require('../validations/login/validates');

const { loginController } = require('../controllers/loginController');

const router = Router();

router.post(
  '/',
  validateEmail,
  validatePassword,
  loginController,
);

module.exports = router;