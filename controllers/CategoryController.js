require('dotenv').config();
const CategoryService = require('../services/CategoryService');
const { validateToken } = require('../services/validations');
const { Categories } = require('../models');

const INTERNAL_ERROR = 'Algo deu errado';

const createCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const token = req.headers.authorization;

    const verifyTokenError = validateToken(token);
    if (verifyTokenError) {
      return res.status(verifyTokenError.numberStatus).json({ message: verifyTokenError.message });
    }

    const verifyDataError = await CategoryService.createCategories(name);
    if (verifyDataError) {
      return res.status(verifyDataError.numberStatus).json({ message: verifyDataError.message });
    }

    const newCategory = await Categories.create({ name });
    return res.status(201).json(newCategory);
  } catch (e) {
    res.status(500).json({ message: INTERNAL_ERROR });
  }
};

module.exports = {
  createCategories,
};
