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
  // https://stackoverflow.com/questions/40140149/use-async-await-with-array-map async await with .map
  const checkCategories = await Promise.all(categoryIds.map(async (category) => {
      const categoryCheck = await database.Categories.findOne({ where: { id: category } });
      if (categoryCheck === null) {
        return false;
      } return true;
    }));
  const check = checkCategories.some((boolean) => boolean === false);
  console.log(check);
  if (check) {
    console.log(check);
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategories,
};
