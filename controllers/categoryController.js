const rescue = require('express-rescue');
const services = require('../services/categoryService');

const createCategory = rescue(async (req, res) => {
  const { name } = req.body;
  // console.log(name, 'NAME CONTROLER');
    const result = await services.createCategory(name);
    return res.status(201).json(result);
  // req 05 desgrama  
});

module.exports = {
  createCategory,
};