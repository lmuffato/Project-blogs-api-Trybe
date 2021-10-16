const { Router } = require('express');
const { addUser, getUser, getUserById } = require('../controllers/userController');
const { validateEmail,
  validateName,
  validatePassword,
  validateExistingUser,
} = require('../middlewares/validateUsers');
const validateJWT = require('../middlewares/validateJWT');

const router = Router();

router.post('/user', validateEmail, validateName, validatePassword, addUser);
router.get('/user', validateJWT, getUser);
router.get('/user/:id', validateJWT, validateExistingUser, getUserById);

module.exports = router;