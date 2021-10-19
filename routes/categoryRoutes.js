const express = require('express');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').post(authController.verify, categoryController.create);

module.exports = router;