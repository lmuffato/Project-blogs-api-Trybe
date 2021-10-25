const express = require('express');
const rescue = require('express-rescue');

const postController = require('../controllers/postControllers');

const postRouter = express.Router();

postRouter.post('/', rescue(postController.addPost));
postRouter.get('/', rescue(postController.getPost));

module.exports = postRouter;
