const express = require('express');

const route = express.Router();

const validatePayloadPost = require('../middlewares/posts');
const validateToken = require('../middlewares/auth');
const { createPost } = require('../controllers/posts');

route.post('/', validatePayloadPost, validateToken, createPost);

module.exports = route;