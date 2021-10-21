const express = require('express');
const { validateUser, validateEmail } = require('../middlewares/validate');
const userController = require('../controllers/userController');

const loginController = require('../controllers/loginController');

const { tokenValidate } = require('../middlewares/tokenValidate');

const router = express.Router();
router.get('/user', tokenValidate, userController.getAllUsers);
router.get('/user/:id', tokenValidate, userController.getUser);
router.post('/user', validateUser, userController.createUser);

router.post('/login', validateEmail, loginController.login);

module.exports = router;