const database = require('../models');

const validateTitle = (req, res, next) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  next();
};

const validateContent = (req, res, next) => {
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: '"content" is required' });
  next();
};

const validateCategories = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  try {
  await categoryIds.every(async (category) => {
      const categoryCheck = await database.Categories.findOne({ where: { id: category } });
      if (categoryCheck === null) {
        console.log('fdasfdsa');
        return res.status(400).json({ message: '"categoryIds" not found' });
      } return true;
    });
  } catch (e) {
    console.log(e.error);
  }
    
  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategories,
};
