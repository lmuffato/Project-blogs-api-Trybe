const express = require('express');
const { validateUser, validateEmail } = require('../middlewares/validate');
const userController = require('../controllers/userController');

const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/user', validateUser, userController.createUser);
router.post('/login', validateEmail, loginController.login);

module.exports = router;