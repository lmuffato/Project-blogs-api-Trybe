const express = require('express');
const rescue = require('express-rescue');
const auth = require('../middlewares/auth');
const validateNameCategory = require('../middlewares/validateNameCategory');
const controllers = require('../controllers');

const userRouter = express.Router();

userRouter.post('/', auth, validateNameCategory, rescue(controllers.createCategory));

module.exports = userRouter;