const { categoryServices } = require('../services');

const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryServices.createCategory(req.body);
    
    return res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
  }
};

const findAllCategories = async (_req, res) => {
  try {
    const categories = await categoryServices.findAllCategories();

    return res.status(200).json(categories);
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  createCategory,
  findAllCategories,
};
