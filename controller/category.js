const rescue = require('express-rescue');
const serviceCategory = require('../service/category');

const createCategory = rescue(
  async (req, res) => {
    const { name } = req.body;
    const { authorization } = req.headers;
    const newCat = await serviceCategory.createCategory(name, authorization);

    res.status(201).json(newCat);
  },
);

const findCategory = rescue(
  async (req, res) => {
    const { authorization } = req.headers;
    const categories = await serviceCategory.findCategories(authorization);

    res.status(201).json(categories);
  },
);

module.exports = {
  createCategory,
  findCategory,
};
