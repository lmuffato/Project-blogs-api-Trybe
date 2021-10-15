const express = require('express');

const route = express.Router();

const { createUser, getUsers, getUserById } = require('../controllers/users');
const { validateUserPayload } = require('../middlewares/users');
const validateToken = require('../middlewares/auth');

route.post('/', validateUserPayload, createUser);
route.get('/', validateToken, getUsers);
route.get('/:id', validateToken, getUserById);

module.exports = route;
