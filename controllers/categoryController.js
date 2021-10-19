const rescue = require('express-rescue');
const categoryService = require('../services/categoriesService');

const createCategory = rescue(async (req, res) => {
    const { name } = req.body;

    const category = await categoryService.createCategory(name);

    if (category.message) return res.status(category.code).json({ message: category.message });

    return res.status(201).json(category);
});

const getAllCategories = rescue(async (_req, res) => {
    const categories = await categoryService.getAllCategories();

    return res.status(200).json(categories);
});

module.exports = {
    createCategory,
    getAllCategories,
};