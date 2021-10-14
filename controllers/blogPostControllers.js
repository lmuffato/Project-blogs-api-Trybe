const express = require('express');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const validateCategoryIds = require('../middlewares/categoryIdsValidations');
const validateContent = require('../middlewares/contentValidations');
const validateTitle = require('../middlewares/titleValidations');
const validateJWT = require('../middlewares/validateJWT');

const secret = process.env.JWT_SECRET;

const { BlogPost } = require('../models');

const router = express.Router();

router
  .post('/', validateTitle, validateContent, validateCategoryIds, validateJWT, async (req, res) => {
    try {
      const token = req.headers.authorization;
      console.log('Aqui');
      const { user } = jwt.verify(token, secret);
      const { title, content, categoryIds } = req.body;
      const post = await BlogPost.create({ title, content, categoryIds, userId: user.id });
      return res.status(201).json({
        id: post.id,
        userId: post.userId,
        title: post.title,
        content: post.content,
      });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: `Erro: ${e.message}` });
    }
  });

module.exports = router;
