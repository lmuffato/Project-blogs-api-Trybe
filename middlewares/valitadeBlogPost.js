const { Op } = require('sequelize');

const { Category } = require('../models');

const validateInputs = (req, res, next) => {
  const { title, categoryIds, content } = req.body;

  if (!title) {
   return res.status(400).json({ message: '"title" is required' });
  }
  if (!categoryIds) {
   return res.status(400).json({ message: '"categoryIds" is required' });
  }
  if (!content) {
   return res.status(400).json({ message: '"content" is required' });
  }
  next();
};

const validateCategoryExist = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (typeof categoryIds !== 'object') {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  const categoryIdsValid = await Category.findAll({ where: {
    id: { [Op.in]: categoryIds },
  } });
  console.log('entrou aqui', categoryIdsValid);
  if (categoryIdsValid.length === 0) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

// requisito 07 feito com a ajuda do colega Lucas Godoi.

module.exports = {
  validateInputs,
  validateCategoryExist,
};