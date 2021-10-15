const { success } = require('../utils/httpStatusCodes');
const categoriesServices = require('../services/categories');

const createCategory = async (req, res, _next) => {
    const { name } = req.body;
    const category = await categoriesServices.createCategory(name);
    return res.status(success.created).json(category);
};

const getCategories = async (req, res, _next) => {
    const categories = await categoriesServices.getCategories();
    return res.status(success.ok).json(categories);
};

module.exports = { createCategory, getCategories };