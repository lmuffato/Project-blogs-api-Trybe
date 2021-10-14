const express = require('express');
const categoryController = require('../controller/categoryController');
const { validateCategorie } = require('../middlewares/categorieValidate');
const { existsToken, verifyToken } = require('../middlewares/jwtValidate');

const tokenValidation = [existsToken, verifyToken];

const categoryRouter = express.Router();

categoryRouter.post('/', ...tokenValidation,
validateCategorie, categoryController.create);

categoryRouter.get('/', ...tokenValidation, categoryController.getAll);

module.exports = categoryRouter;
