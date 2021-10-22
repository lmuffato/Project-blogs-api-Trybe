const { Router } = require('express');

const postController = require('../controllers/postController');
const { authToken } = require('../middlewares/authToken');
const postValidation = require('../middlewares/postValidation');
const updateFieldsValidation = require('../middlewares/updateFieldsValidation');
const userVerify = require('../middlewares/userVerify');

const router = Router();

router.post('/', authToken, postValidation, postController.createPost);
router.get('/', authToken, postController.findPost);
router.get('/:id', authToken, postController.findById);
router.put('/:id', 
  authToken,
  updateFieldsValidation, 
  postValidation,
  userVerify, 
  postController.updatePost);

module.exports = router;