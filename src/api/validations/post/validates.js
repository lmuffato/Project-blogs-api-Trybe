require('dotenv').config();

const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const {
  HTTP_BAD_REQUEST,
  HTTP_UNAUTHORIZED,
} = require('../../status');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  const message = '"title" is required';

  if (!title || title === '') return res.status(HTTP_BAD_REQUEST).json({ message });

  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  const message = '"content" is required';

  if (!content || content === '') return res.status(HTTP_BAD_REQUEST).json({ message });

  next();
};

const validateCategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;
  const message = '"categoryIds" is required';

  if (!categoryIds || categoryIds === '') return res.status(HTTP_BAD_REQUEST).json({ message });

  next();
};

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization;
  const message = 'Token not found';

  if (!token) return res.status(HTTP_UNAUTHORIZED).json({ message });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.post = payload;
    next();
  } catch (e) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryIds,
  validateToken,
};