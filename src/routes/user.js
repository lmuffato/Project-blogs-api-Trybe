const express = require('express');
const rescue = require('express-rescue');
const { userControllers } = require('../controllers');
const { middlewaresUser } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresUser.validate, rescue(userControllers.createUser));

module.exports = router;
