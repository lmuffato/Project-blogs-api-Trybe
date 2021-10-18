const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;
const { Categories, BlogPosts } = require('../models');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  const findCategory = await Categories.findOne({ where: { id: categoryIds } });
  if (!findCategory) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const { id } = jwt.verify(authorization, JWT_SECRET);

    req.user = id;
  } catch (e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

const validatePostId = async (req, res, next) => {
  const { id } = req.params;
  const findPost = await BlogPosts.findByPk(id);
  if (!findPost) return res.status(404).json({ message: 'Post does not exist' });
  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
  validatePostId,
};