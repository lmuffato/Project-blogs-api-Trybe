const express = require('express');

const userController = require('../controllers/userController');
const { verifyToken } = require('../middlewares/verifyToken');

const routes = express.Router();

routes.post('/', userController.create);
routes.get('/', verifyToken, userController.getUsers);
routes.get('/:id', verifyToken, userController.getById);
routes.delete('/me', verifyToken, userController.deleteUser);

module.exports = routes;
