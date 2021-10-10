const express = require('express');
const loginController = require('../controller/loginController');
const { validateLogin, verifyExistUser } = require('../middlewares/loginValidate');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, verifyExistUser, loginController.postLogin);

module.exports = loginRouter;
