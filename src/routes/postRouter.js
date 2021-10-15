const { Router } = require('express');

const { createNewPost, getPosts, getSinglePost } = require('../controllers');

const { Auth, validPost, checkIfCategoryExists, checkIfPostExists } = require('../middlewares');

const router = Router();
const postValidation = [validPost, checkIfCategoryExists];
router.post('/', Auth, postValidation, createNewPost);
router.get('/', Auth, getPosts);
router.get('/:id', Auth, checkIfPostExists, getSinglePost);

module.exports = router;