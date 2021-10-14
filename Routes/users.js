const express = require('express');
const UserController = require('../Controllers/userController');

const { validateUser, validateLogin } = require('../Middlewares/user');
// const auth = require('../Middlewares/auth');

const router = express.Router();

router.post('/', validateUser, UserController.addNew);
router.post('/login', validateLogin, UserController.login);

module.exports = router;
