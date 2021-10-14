const express = require('express');
const categorieController = require('../controller/categorieController');
const { validateCategorie } = require('../middlewares/categorieValidate');
const { existsToken, verifyToken } = require('../middlewares/jwtValidate');

const tokenValidation = [existsToken, verifyToken];

const categorieRouter = express.Router();

categorieRouter.post('/', ...tokenValidation,
validateCategorie, categorieController.create);

module.exports = categorieRouter;
