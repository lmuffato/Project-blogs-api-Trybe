const express = require('express');

const route = express.Router();

const categorieController = require('../controllers/CategoriesController');

const {
  validateNameCategorie,
  validateToken,
} = require('../middlewares/CategoriesMiddleware');

route.post('/', validateNameCategorie, validateToken, categorieController.createCategorie);
route.get('/', validateToken, categorieController.listCategories);

module.exports = route;