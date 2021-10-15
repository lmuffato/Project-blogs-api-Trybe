const { success } = require('../utils/httpStatusCodes');
const categoriesServices = require('../services/categories');

const createCategory = async (req, res, _next) => {
    const { name } = req.body;
    console.log('chegou auqi');
    const category = await categoriesServices.createCategory(name);
    return res.status(success.created).json(category);
};

module.exports = { createCategory };