const jwt = require('jsonwebtoken');
const { Categories } = require('../models');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const validateName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }
  next();
  };

const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (email === '') return res.status(400).json({ message: '"email" is not allowed to be empty' });
  if (!email) return res.status(400).json({ message: '"email" is required' });
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) return res.status(400).json({ message: '"email" must be a valid email' });
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password === '') {
    return res.status(400).json({ message: '"password" is not allowed to be empty' });
  }
  if (!password) return res.status(400).json({ message: '"password" is required' });
  if (password.length !== 6) {
    return res.status(400).json({ message: '"password" length must be 6 characters long' });
  }
  next();
};

const checkToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
  try {
    const user = jwt.verify(authorization, JWT_SECRET);
    req.user = user;
    next();
  } catch (_e) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

const validatePostTitleNContent = (req, res, next) => {
  const { title, content } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const validatePostCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  const checkIds = await Categories.findOne({ where: { id: categoryIds[0] } });
  if (!checkIds) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = {
  validateName,
  validateEmail,
  validatePassword,
  checkToken,
  validatePostTitleNContent,
  validatePostCategoryIds,
};
