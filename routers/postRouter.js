const express = require('express');

const router = express.Router();

const { categoryIdValidation, postValidation } = require('../validations/postValidation');

const { tokenValidation } = require('../token/tokenValidation');

const { createPost, findAllPost } = require('../controllers/postController');

router.post('/',
  postValidation,
  categoryIdValidation,
  tokenValidation,
  createPost);

  router.get('/', 
    tokenValidation, 
    findAllPost);

module.exports = router;

// Este projeto fui realizado com sucesso pois tive ajuda de Anderson Nascimento, Marília Aldrighi, Pollyana Oliveira, Luan Ramalho, Lucas Lara, João nascimento... to be continue