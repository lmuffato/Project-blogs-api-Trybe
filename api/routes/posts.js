const express = require('express');

const route = express.Router();

const validatePayloadPost = require('../middlewares/posts');
const validateToken = require('../middlewares/auth');
const { createPost, getPosts } = require('../controllers/posts');

route.post('/', validatePayloadPost, validateToken, createPost);
route.get('/', validateToken, getPosts);

module.exports = route;