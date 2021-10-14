const express = require('express');
const rescue = require('express-rescue');
const categories = require('../controllers/categoryControllers');
const tokenValidation = require('../middlewares/tokenValidation');
const categoryValidation = require('../middlewares/categoryValidation');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenValidation, categoryValidation, rescue(categories.createCategories));
categoryRouter.get('/', tokenValidation, rescue(categories.findAllCategories));

module.exports = categoryRouter;