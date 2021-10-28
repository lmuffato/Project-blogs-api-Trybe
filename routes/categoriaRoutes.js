const express = require('express');

const routes = express.Router();

const categoryController = require('../controllers/categoryController');
const { verifyToken } = require('../middlewares/verifyToken');

routes.post('/', verifyToken, categoryController.create);
routes.get('/', verifyToken, categoryController.getCategories);

module.exports = routes;
