const express = require('express');
const rescue = require('express-rescue');
const loginController = require('../controllers/loginController');
const loginValidation = require('../middlewares/loginValidation');

const loginRouter = express.Router();

loginRouter.post('/', loginValidation, rescue(loginController.loginController));

module.exports = loginRouter;