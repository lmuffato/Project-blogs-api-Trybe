const express = require('express');
const rescue = require('express-rescue');
const categories = require('../controllers/categoryControllers');
const tokenValidation = require('../middlewares/tokenValidation');
const categoryValidation = require('../middlewares/categoryValidation');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenValidation, categoryValidation, rescue(categories.createCategories));

module.exports = categoryRouter;