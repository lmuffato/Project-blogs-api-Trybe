const express = require('express');
const { validateCreateUser } = require('../middlewares/validations');
const User = require('../controllers/userController');

const UsersRouter = express.Router();

UsersRouter.post('/', validateCreateUser, User.createUser);

module.exports = UsersRouter;