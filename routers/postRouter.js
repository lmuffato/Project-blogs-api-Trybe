const { Router } = require('express');

const { validateJWT } = require('../middlewares/authMiddleware');
const { validatePost } = require('../middlewares/postValidation');

const postController = require('../controllers/postController');

const router = Router();

router.post(
  '/',
  validateJWT,
  validatePost,
  postController.create,
);

module.exports = router;