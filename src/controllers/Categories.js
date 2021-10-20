const { Category } = require('../models');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = await Category.create({ name });

    return res.status(201).json(newCategory);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({ raw: true });

    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = { createCategory, getAllCategories };
