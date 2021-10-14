const express = require('express');
const { validatePost, validatePostPut } = require('../middlewares/validations');
const postController = require('../controllers/postController');
const verificCategorie = require('../middlewares/verificCategorie');
const authToken = require('../middlewares/authToken');
const { isValidUser, existPost } = require('../middlewares/verificPost');

const postRouter = express.Router();

postRouter.post('/', validatePost, verificCategorie, authToken, postController.createPost);
postRouter.get('/', authToken, postController.getAllPost);
postRouter.get('/:id', authToken, existPost, postController.getById);
postRouter.put('/:id', authToken, validatePostPut, existPost, isValidUser, postController.editPost);
postRouter.delete('/:id', authToken, existPost, isValidUser, postController.deletePost);

module.exports = postRouter;