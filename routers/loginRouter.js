const { Router } = require('express');
const { validateEmail } = require('../middlewares/emailValidation');
const { validatePassword } = require('../middlewares/passwordValidation');

const router = Router();

const loginController = require('../controllers/loginController');

router.post(
  '/',
  validateEmail,
  validatePassword,
  loginController.login,
);

module.exports = router;