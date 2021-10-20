const express = require('express');
const usersController = require('../controllers/usersController');

const router = express.Router();

router.use('/user', usersController);

module.exports = router;