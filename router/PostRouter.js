const { Router } = require('express');
const postsController = require('../controllers/postsController');
const { tokenAuth } = require('../auth/tokenAuth');
const { postValidator, categoryValidator } = require('../utils/middlewares');

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

module.exports = router;