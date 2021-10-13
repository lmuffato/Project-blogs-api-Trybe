const express = require('express');
const { validateCategories } = require('../middlewares/validations');
const authToken = require('../middlewares/authToken');
const Categorie = require('../controllers/categorieController');

const CategorieRouter = express.Router();

CategorieRouter.post('/', authToken, validateCategories, Categorie.createCategorie);
CategorieRouter.get('/', authToken, Categorie.getAllCategorie);

module.exports = CategorieRouter;