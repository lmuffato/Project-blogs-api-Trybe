const { Router } = require('express');

const { createNewPost, getPosts } = require('../controllers');

const { Auth, validPost, checkIfCategoryExists } = require('../middlewares');

const router = Router();
const postValidation = [validPost, checkIfCategoryExists];
router.post('/', Auth, postValidation, createNewPost);
router.get('/', Auth, getPosts);

module.exports = router;