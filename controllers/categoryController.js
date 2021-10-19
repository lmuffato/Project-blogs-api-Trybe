const rescue = require('express-rescue');
const categoryService = require('../services/categoriesService');

const createCategory = rescue(async (req, res) => {
    const { name } = req.body;

    const category = await categoryService.createCategory(name);

    if (category.message) return res.status(category.code).json({ message: category.message });

    return res.status(201).json(category);
});

module.exports = {
    createCategory,
};