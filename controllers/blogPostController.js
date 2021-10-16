const jwt = require('jsonwebtoken');
const database = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const token = req.headers.authorization;
  const payload = jwt.verify(token, secret);
  const userId = payload.data.id;
  const newPost = await database.BlogPosts.create({ title, content, categoryIds, userId });
  const addedPost = { id: newPost.id, userId, title: newPost.title, content: newPost.content };
  return res.status(201).json(addedPost);
};

module.exports = {
  createPost,
};
