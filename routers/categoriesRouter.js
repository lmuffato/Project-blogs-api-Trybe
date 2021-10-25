const express = require('express');
const rescue = require('express-rescue');

const categoriesController = require('../controllers/categoriesController');

const categoriesRouter = express.Router();

categoriesRouter.post('/', rescue(categoriesController.addCategories));
categoriesRouter.get('/', rescue(categoriesController.getCategories));

module.exports = categoriesRouter;
