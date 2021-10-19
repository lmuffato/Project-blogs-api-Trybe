const serviceCategory = require('../services/category');

const createCategory = async (req, res) => {
    const { name } = req.body;

    const category = await serviceCategory.createCategory(name);

    return res.status(category.status).json(category.message);
};

module.exports = { createCategory };