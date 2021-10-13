const { categoryServices } = require('../services');

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryServices.createCategory(req.body);
    
    return (res.status(201).json(newCategory));
  } catch (err) {
    console.error(err);
  }
};

module.exports = { createCategory };
