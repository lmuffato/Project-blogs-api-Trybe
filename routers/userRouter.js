const { Router } = require('express');
const { validateEmail } = require('../middlewares/emailValidation');
const { validateName } = require('../middlewares/nameValidation');
const { validatePassword } = require('../middlewares/passwordValidation');
const { addUser } = require('../controllers/userController');

const router = Router();

router.post(
  '/',
  validateEmail,
  validateName,
  validatePassword,
  addUser,
);

module.exports = router;