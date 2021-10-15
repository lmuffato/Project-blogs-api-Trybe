const express = require('express');
const { validateLoginPayload } = require('../middlewares/users');
const { login } = require('../controllers/users');

const route = express.Router();

route.post('/', validateLoginPayload, login);

module.exports = route;