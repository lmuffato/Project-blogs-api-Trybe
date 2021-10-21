const { Router } = require('express');

const postController = require('../controllers/postController');
const { authToken } = require('../middlewares/authToken');
const newPostValidation = require('../middlewares/newPostValidation');

const router = Router();

router.post('/', authToken, newPostValidation, postController.createPost);

module.exports = router;