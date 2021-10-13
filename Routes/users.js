const express = require('express');
const UserController = require('../Controllers/userController');

const { validateUser } = require('../Middlewares/user');

const router = express.Router();

router.post('/', validateUser, UserController.addNew);

module.exports = router;
