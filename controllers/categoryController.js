const rescue = require('express-rescue');
const services = require('../services/categoryService');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
  // console.log(req.body, 'NAME CONTROLER');

  // console.log(name, 'NAME CONTROLER');
    const result = await services.createCategory(name);
    return res.status(201).json(result);  
});

const findAllCategories = rescue(async (_req, res) => {
  const result = await services.findAllCategories();
  return res.status(200).json(result);
});

module.exports = {
  createCategory,
  findAllCategories,
};