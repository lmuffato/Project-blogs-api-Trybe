const { Category, Post } = require('../models');

const validadeRequiredFields = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title) {
    return res.status(400).json({
      message: '"title" is required',
    });
  }
  if (!content) {
    return res.status(400).json({
      message: '"content" is required',
    });
  }
  if (!categoryIds) {
    return res.status(400).json({
      message: '"categoryIds" is required',
    });
  }
  next();
};

const categoryIdsNotFound = async (req, res, next) => {
  const { categoryIds } = req.body;
  
  categoryIds.every(async (categoryId) => {
    const findCategoryId = await Category.findOne({ where: { id: categoryId } });
    if (!findCategoryId) {
      return res.status(400).json({
        message: '"categoryIds" not found',
      });
    }
    next();
  });
};

const checkExistingIdPost = async (req, res, next) => {
  const { id } = req.params;
  const findPost = await Post.findOne({ where: { id } });

  if (!findPost) {
    return res.status(404).json({
      message: 'Post does not exist',
    });
  }
  next();
};

module.exports = {
  validadeRequiredFields,
  categoryIdsNotFound,
  checkExistingIdPost,
};