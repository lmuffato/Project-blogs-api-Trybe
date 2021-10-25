const { Category } = require('../models');

// const {
//     ok,
//     created,
// } = require('../utils/anwers');

const create = async (req, res) => {
    const { name } = req.body;
    const result = await Category.create({ name });
    res.status(201).json(result);
};

const getAll = async (_req, res) => {
    const allCategories = await Category.findAll();
    res.status(200).json(allCategories);
};

const getCategoriesIds = async (catId) => Category.findAll({ where: { id: catId } });

module.exports = {
  create,
  getAll,
  getCategoriesIds,
};