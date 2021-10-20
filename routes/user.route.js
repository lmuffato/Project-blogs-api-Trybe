const { Router } = require('express');
const { createUser, login } = require('../controllers/user.controller');
const { userValidate, userRequired } = require('../validations/user.validation');
const { loginNotEmpty } = require('../validations/login.validation');

const router = Router();

router.post('/user', userRequired, userValidate, createUser);
router.post('/login', userRequired, loginNotEmpty, login);

module.exports = router;