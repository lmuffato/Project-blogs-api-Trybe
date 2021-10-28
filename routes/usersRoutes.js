const express = require('express');

const userController = require('../controllers/userController');
const { verifyToken } = require('../middlewares/verifyToken');

const routes = express.Router();

routes.post('/', userController.create);
routes.get('/', verifyToken, userController.getUsers);

module.exports = routes;
