const { Router } = require('express');
const { createUser } = require('../controllers/user.controller');
const userValidate = require('../validations/user.validation');

const router = Router();

router.post('/user', userValidate, createUser);

module.exports = router;