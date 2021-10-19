const rescue = require('express-rescue');

const BlogPostServices = require('../services/BlogPost');
const { BlogPost, PostCategory } = require('../models');

const createPost = rescue(async (req, res) => {
  const { title, categoryIds, content } = req.body;
  const { id } = req.user;

  const newPost = await BlogPostServices.createPost(title, content, categoryIds);
  if (newPost) return res.status(newPost.code).json({ message: newPost.message });

  const createdPost = await BlogPost.create({ title, content, userId: id });
  const { dataValues } = createdPost;
  const allCategories = await categoryIds.map(async (category) => (
    PostCategory.create({ postId: dataValues.id, categoryId: category })));
  await Promise.all(allCategories);
  const { updated, published, ...resultValues } = dataValues;
  res.status(201).json(resultValues);
});

module.exports = { createPost };
