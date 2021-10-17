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

module.exports = {
  createCategory,
};
