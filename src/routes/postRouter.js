const { Router } = require('express');

const {
  createNewPost,
  getPosts,
  getSinglePost,
  updatePost,
  deletePost,
} = require('../controllers');

const {
  Auth,
  validPost,
  checkIfCategoryExists,
  checkIfPostExists,
  allowUpdate,
  allowDelete,
} = require('../middlewares');

const router = Router();
const postValidation = [validPost, checkIfCategoryExists];

router.use(Auth);

router.post('/', postValidation, createNewPost);
router.get('/', getPosts);
router.get('/:id', checkIfPostExists, getSinglePost);
router.put('/:id', allowUpdate, updatePost);
router.delete('/:id', allowDelete, deletePost);

module.exports = router;
