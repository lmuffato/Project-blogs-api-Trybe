const express = require('express');
const rescue = require('express-rescue');
const CategoryControllers = require('../controllers/category');
const authMiddleware = require('../middlewares/authMiddleware');

const route = express.Router();

route.post('/', authMiddleware, rescue(CategoryControllers.createCategory));

module.exports = route;