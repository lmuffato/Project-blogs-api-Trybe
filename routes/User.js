const express = require('express');
const { validateCreateUser } = require('../middlewares/validations');
const authToken = require('../middlewares/authToken');
const User = require('../controllers/userController');

const UsersRouter = express.Router();

UsersRouter.post('/', validateCreateUser, User.createUser);
UsersRouter.get('/', authToken, User.getAll);

module.exports = UsersRouter;