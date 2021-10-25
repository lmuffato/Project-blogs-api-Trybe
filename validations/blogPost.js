// const { validateCategoryIds } = require('./validadeCategoryIds');

const badRequest = 400;
const validateTitle = (req, res, next) => {
    const { title } = req.body;
    if (!title || title === '') {
      return res.status(badRequest)
      .json({ message: '"title" is required' });
    }
  
    next(); 
  };
  const validateContent = (req, res, next) => {
    const { content } = req.body;
    if (!content || content === '') {
      return res.status(badRequest)
      .json({ message: '"content" is required' });
    }
  
    next(); 
  };
  /* const validateCategory = async (req, res, next) => {
    const { categoryIds } = req.body; // lembrar que categoryIds é um vetor
    
    if (!categoryIds || categoryIds.length === 0) {
      return res.status(badRequest)
      .json({ message: '"categoryIds" is required' });
    }
    
    const existingCategory = await validateCategoryIds(categoryIds);

    if (existingCategory === '!existsCategory') {
      return res.status(badRequest)
      .json({ message: '"categoryIds" not found' });
    }
    
    next(); 
  }; */

  module.exports = { 
    validateTitle,
    validateContent,
    
   };