const { Router } = require('express');

const { validateJWT } = require('../middlewares/authMiddleware');
const { validateEmail } = require('../middlewares/emailValidation');
const { validateUsername } = require('../middlewares/usernameValidation');
const { validatePassword } = require('../middlewares/passwordValidation');

const userController = require('../controllers/userController');

const router = Router();

router.post(
  '/',
  validateEmail,
  validateUsername,
  validatePassword,
  userController.addUser,
);

router.get(
  '/',
  validateJWT,
  userController.getAll,
);

router.get(
  '/:id',
  validateJWT,
  userController.getById,
);

module.exports = router;