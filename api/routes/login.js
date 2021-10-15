const express = require('express');
const rescue = require('express-rescue');
const { validateLoginPayload } = require('../middlewares/users');
const { login } = require('../controllers/users');

const route = express.Router();

route.post('/', validateLoginPayload, rescue(login));

module.exports = route;