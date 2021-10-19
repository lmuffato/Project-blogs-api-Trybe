const serviceCategory = require('../services/category');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const category = await serviceCategory.createCategory(name);

    if (category.status === 201) return res.status(category.status).json(category.message);
    return res.status(category.status).json({ message: category.message });
};

const getCategories = async (_req, res) => {
    const category = await serviceCategory.getCategories();
    return res.status(category.status).json(category.message);
};

module.exports = { createCategory, getCategories };