const express = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const validateNameCategory = require('../middlewares/validateNameCategory');
const controllers = require('../controllers');

const categoriesRouter = express.Router();

categoriesRouter.post('/', auth, validateNameCategory, rescue(controllers.createCategory));
categoriesRouter.get('/', auth, controllers.getAllCategories);

module.exports = categoriesRouter;