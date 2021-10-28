const express = require('express');

const routes = express.Router();

const postCategoryController = require('../controllers/postCategoryController');
const { verifyToken } = require('../middlewares/verifyToken');

routes.use('/', verifyToken, postCategoryController.create);

module.exports = routes;
