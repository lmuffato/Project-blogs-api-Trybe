const { Router } = require('express');
const postsController = require('../controllers/postsController');
const { tokenAuth } = require('../auth/tokenAuth');
const { postValidator, categoryValidator, updateValidator } = require('../utils/middlewares');

const router = Router();

router.post('/', 
tokenAuth,
postValidator,
categoryValidator,
postsController.create);

router.get('/', 
tokenAuth,
postsController.getPosts);

router.get('/:id', 
tokenAuth,
postsController.getPost);

router.put('/:id', 
tokenAuth,
updateValidator,
postsController.updatePost);

router.delete('/:id', 
tokenAuth,
postsController.deletePost);

module.exports = router;