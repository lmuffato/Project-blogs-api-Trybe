const { Router } = require('express');
const { createPost, getAllPosts } = require('../controllers/postsController');
const { validatePost, validateExistCategory } = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post('/', validateJWT,
validatePost,
validateExistCategory,
createPost);

router.get('/', validateJWT, getAllPosts);

module.exports = router; 
