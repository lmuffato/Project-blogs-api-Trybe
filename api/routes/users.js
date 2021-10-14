const express = require('express');
const rescue = require('express-rescue');

const route = express.Router();

const { createUser } = require('../controllers/usersControllers');
const { validateUserPayload } = require('../middlewares/users');

route.post('/', validateUserPayload, rescue(createUser));

module.exports = route;
