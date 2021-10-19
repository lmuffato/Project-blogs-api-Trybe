const categoryService = require('../services/categoryService');

exports.create = async (req, res, next) => {
  try {    
    const { name } = req.body;
    const newCategory = await categoryService.create(name);
    return res.status(201).json(newCategory);
  } catch (err) {
    next(err);
  }
};
