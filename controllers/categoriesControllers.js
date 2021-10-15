const { Categories } = require('../models');

const createNewCategory = async (req, res) => {
    const { name } = req.body;
    const { dataValues } = await Categories.create({ name });
    return res.status(201).json(dataValues);
};

const getAllCategories = async (req, res) => {
    const categories = await Categories.findAll();
    return res.status(200).json(categories);
};

module.exports = {
    createNewCategory,
    getAllCategories,
};
