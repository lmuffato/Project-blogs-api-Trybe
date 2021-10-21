const express = require('express');
const usersController = require('../controllers/usersController');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.use('/user', usersController);
router.use('/login', loginController);

module.exports = router;