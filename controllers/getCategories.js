const { Category } = require('../models');

const getCategories = async (_req, res) => {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
};

module.exports = getCategories;