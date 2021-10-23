const express = require('express');
const rescue = require('express-rescue');

const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.get('/', rescue(categoryController.getAllCategories));
categoryRouter.post('/', rescue(categoryController.addCategory));

module.exports = categoryRouter;