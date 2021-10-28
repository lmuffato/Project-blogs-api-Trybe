const express = require('express');

const routes = express.Router();

const postCategoryController = require('../controllers/postCategoryController');
const { verifyToken } = require('../middlewares/verifyToken');

routes.post('/', verifyToken, postCategoryController.create);
routes.get('/', verifyToken, postCategoryController.getPosts);

module.exports = routes;
