const categoriesService = require('../services/categories');

const createCategories = async (req, res) => {
    const { status, data, message } = await categoriesService
    .createCategories(req.body);
    if (message) return res.status(status).json({ message });
    return res.status(status).json(data);
};

const getAllCategories = async (_req, res) => {
    const { status, data } = await categoriesService.getAllCategories();
    return res.status(status).json(data);
};

module.exports = { createCategories, getAllCategories };
