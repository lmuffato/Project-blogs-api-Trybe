const { Router } = require('express');
const { validateCategoryIds, existsCategory } = require('../middlewares/categoryIdsValidations');
const validateContent = require('../middlewares/contentValidations');
const validateTitle = require('../middlewares/titleValidations');
const verifyToken = require('../middlewares/utils/verifyToken');
const validateJWT = require('../middlewares/validateJWT');
const { BlogPost, User, Category } = require('../models');
const createPostsCategory = require('./postCategoryController');

const BlogPosts = Router();

BlogPosts.post('/',
  validateTitle,
  validateContent,
  validateCategoryIds,
  existsCategory,
  validateJWT, async (req, res) => {
    try {
      const { title, content, categoryIds } = req.body;
      const token = req.headers.authorization;
      const user = verifyToken(token);
      const post = await BlogPost.create({ title, content, userId: user.id });
      createPostsCategory(post, categoryIds);
      return res.status(201).json(post);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: `Erro: ${e.message}` });
    }
  });

BlogPosts.get('/', validateJWT, async (req, res) => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return res.status(200).json(posts);
});

module.exports = BlogPosts;