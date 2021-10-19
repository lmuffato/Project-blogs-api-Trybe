const express = require('express');
const { validateUser } = require('../middlewares/validate');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', validateUser, userController.createUser);

module.exports = userRouter;