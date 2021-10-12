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

module.exports = router;