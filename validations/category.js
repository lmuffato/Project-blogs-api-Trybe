const badRequest = 400;

  const validateCategoryName = (req, res, next) => {
    const { name } = req.body;
    console.log('validate', name);
    if (!name || name === '') {
      return res.status(badRequest)
      .json({ message: '"name" is required' });
    }
    next(); 
  };
  module.exports = { validateCategoryName };