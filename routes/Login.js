const express = require('express');
const { validateLogin } = require('../middlewares/validations');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, loginController.login);

module.exports = loginRouter;