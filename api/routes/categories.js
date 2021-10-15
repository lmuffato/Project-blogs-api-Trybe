const express = require('express');

const validateToken = require('../middlewares/auth');
const { createCategory, getCategories } = require('../controllers/categories');
const validateCategoryPayload = require('../middlewares/categories');

const route = express.Router();

route.post('/', validateCategoryPayload, validateToken, createCategory);
route.get('/', validateToken, getCategories);

module.exports = route;