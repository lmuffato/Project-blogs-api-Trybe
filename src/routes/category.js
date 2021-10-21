const express = require('express');
const rescue = require('express-rescue');
const { categoryControllers } = require('../controllers');
const { middlewaresCategory } = require('../middlewares');

const router = express.Router();

router.post('/', middlewaresCategory.validateCategory, rescue(categoryControllers.createCategory));
router.get('/', middlewaresCategory.validateToken, rescue(categoryControllers.getCategories));

module.exports = router;
