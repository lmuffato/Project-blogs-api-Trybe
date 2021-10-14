const express = require('express');
const rescue = require('express-rescue');
const validateLogin = require('../middlewares/validateLogin');
const controllers = require('../controllers');

const loginRouter = express.Router();

loginRouter.post('/', validateLogin, rescue(controllers.createLogin));

module.exports = loginRouter;