const { Router } = require('express');

const { validateJWT } = require('../middlewares/authMiddleware');
const { validateEmail } = require('../middlewares/emailValidation');
const { validateName } = require('../middlewares/nameValidation');
const { validatePassword } = require('../middlewares/passwordValidation');

const userController = require('../controllers/userController');

const router = Router();

router.post(
  '/',
  validateEmail,
  validateName,
  validatePassword,
  userController.addUser,
);

router.get(
  '/',
  validateJWT,
  userController.getAll,
);

module.exports = router;