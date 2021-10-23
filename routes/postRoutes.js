const express = require('express');
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

const router = express.Router();

router.route('/')
  .get(authController.verify, postController.getAll)
  .post(authController.verify, postController.create);

  router.route('/search')
    .get(authController.verify, postController.getSearch);

router.route('/:id')
  .get(authController.verify, postController.getOne)
  .put(authController.verify, authController.verifySameUser, postController.updateOne)
  .delete(authController.verify, authController.verifySameUser, postController.deleteOne);

module.exports = router;