const express = require('express');
const rescue = require('express-rescue');

const loginController = require('../controllers/loginControllers');

const loginRouter = express.Router();

loginRouter.post('/', rescue(loginController.login));

module.exports = loginRouter;
