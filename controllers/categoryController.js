const rescue = require('express-rescue');
const services = require('../services/categoryService');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
  // console.log(name, 'NAME CONTROLER');
    const result = await services.createCategory(name);
    res.status(201).json(result);
});

module.exports = {
  createCategory,
};