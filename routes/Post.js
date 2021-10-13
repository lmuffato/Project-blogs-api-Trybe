const express = require('express');
const { validatePost } = require('../middlewares/validations');
const postController = require('../controllers/postController');
const verificCategorie = require('../middlewares/verificCategorie');
const authToken = require('../middlewares/authToken');

const postRouter = express.Router();

postRouter.post('/', validatePost, verificCategorie, authToken, postController.createPost);
postRouter.get('/', authToken, postController.getAllPost);

module.exports = postRouter;