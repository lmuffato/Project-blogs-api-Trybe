const { Router } = require('express');
const { createPost } = require('../controllers/postsController');
const { validatePost, validateExistCategory } = require('../middlewares/validations');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post('/', validateJWT,
validatePost,
validateExistCategory,
createPost);

// router.get('/', validateJWT, getAllCategories);

module.exports = router; 
