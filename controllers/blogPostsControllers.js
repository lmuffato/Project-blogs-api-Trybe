const { Router } = require('express');
const { validateCategoryIds, existsCategory } = require('../middlewares/categoryIdsValidations');
const validateContent = require('../middlewares/contentValidations');
const validateTitle = require('../middlewares/titleValidations');
const verifyToken = require('../middlewares/utils/verifyToken');
const validateJWT = require('../middlewares/validateJWT');
const { BlogPost, User, Category } = require('../models');
const createPostsCategories = require('./postCategoryController');

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
      createPostsCategories(post, categoryIds);
      return res.status(201).json(post);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: `Erro: ${e.message}` });
    }
  });

// BlogPosts.get('/', validateJWT, async (_req, res) => {
//   try {
//     const posts = await BlogPost.findAll({
//       include: [
//         { model: User, as: 'user' },
//         { model: Category, as: 'categories', through: { attributes: [] } },
//       ],
//     });
//     return res.status(200).json(posts);
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ message: `Erro: ${e.message}` });
//   }
// });

// BlogPosts.get('/:id', validateJWT, async (req, res) => {
//   try {
//     const { id } = req.params;
//     const post = await BlogPost.findOne({
//       where: { id },
//       include: [
//         { model: User, as: 'user' },
//         { model: Category, as: 'categories', through: { attributes: [] } },
//       ],
//     });
//     console.log(post);
//     if (post === null) return res.status(404).json({ message: 'Post does not exist' });
//     return res.status(200).json(post);
//   } catch (e) {
//     console.log(e);
//     return res.status(500).json({ message: `Erro: ${e.message}` });
//   }
// });

module.exports = BlogPosts;