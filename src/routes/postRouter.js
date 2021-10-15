const { Router } = require('express');

const { createNewPost } = require('../controllers');

const { Auth, validPost, checkIfCategoryExists } = require('../middlewares');

const router = Router();
const postValidation = [validPost, checkIfCategoryExists];
router.post('/', Auth, postValidation, createNewPost);

module.exports = router;