const express = require('express');
const rescue = require('express-rescue');
const { userControllers } = require('../controllers');

const router = express.Router();

router.post('/', rescue(userControllers.createUser));

module.exports = router;
