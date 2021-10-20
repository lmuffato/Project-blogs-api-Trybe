const { Router } = require('express');

const { validateJWT } = require('../middlewares/authMiddleware');
const { validatePost } = require('../middlewares/postValidation');
const { validateEditPost } = require('../middlewares/postEditValidation');

const postController = require('../controllers/postController');

const router = Router();

router.post(
  '/',
  validateJWT,
  validatePost,
  postController.create,
);

router.get(
  '/',
  validateJWT,
  postController.getAll,
);

router.get(
  '/:id',
  validateJWT,
  postController.getbyId,
);

router.put(
  '/:id',
  validateJWT,
  validateEditPost,
  postController.editPost,
);

module.exports = router;