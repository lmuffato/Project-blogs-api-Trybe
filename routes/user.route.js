const { Router } = require('express');
const { createUser } = require('../controllers/user.controller');
const { userValidate, userRequired } = require('../validations/user.validation');

const router = Router();

router.post('/user', userRequired, userValidate, createUser);

module.exports = router;