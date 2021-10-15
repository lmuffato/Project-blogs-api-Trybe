// const express = require('express');
// require('dotenv').config();
// const jwt = require('jsonwebtoken');
// const validateCategoryIds = require('../middlewares/categoryIdsValidations');
// const validateContent = require('../middlewares/contentValidations');
// const validateTitle = require('../middlewares/titleValidations');
// const validateJWT = require('../middlewares/validateJWT');

// const secret = process.env.JWT_SECRET;

// const { BlogPost, User, Category, PostCategory } = require('../models');
// const createpostCategory = require('./postCategoryController');

// const router = express.Router();

// router
//   .post('/', validateTitle, validateContent, validateCategoryIds, validateJWT, async (req, res) => {
//     try {
//       const { user } = jwt.verify(req.headers.authorization, secret);
//       const { title, content, categoryIds } = req.body;
//       const post = await BlogPost.create({ title, content, categoryIds, userId: user.id });
//       categoryIds.map((id) => createpostCategory(post.id, id));
//       return res.status(201).json({
//         id: post.id,
//         userId: post.userId,
//         title: post.title,
//         content: post.content,
//       });
//     } catch (e) {
//       console.log(e);
//       return res.status(500).json({ message: `Erro: ${e.message}` });
//     }
//   });

// // const getCategories = async (id) => {
// //   const response = await PostCategory.findAll({ where: { userId: id } });
// //   console.log(response);
// // };

// // router.get('/', async (req, res) => {
// //   const response = await BlogPost.findAll();
// //   const posts = response.map(async (post) => {
// //     const user = await User.findOne({ where: { id: post.userId } });
// //     const categories = await getCategories(user.id);
// //     return {
// //       id: post.id,
// //       title: post.title,
// //       content: post.content,
// //       published: post.published,
// //       updated: post.updated,
// //       user: user.dataValues,
// //       categories,
// //     };
// //   });
// //   console.log(posts);
// //   return res.status(200).json(response);
// // });
// module.exports = router;
