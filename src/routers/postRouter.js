const express = require('express');
const rescue = require('express-rescue');

const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', rescue(postController.addPost));

module.exports = postRouter;