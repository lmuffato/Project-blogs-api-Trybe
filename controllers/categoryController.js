const express = require('express');
const rescue = require('express-rescue');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());
const service = require('../services/categoryService');

const createCategory = rescue(async (req, res) => {
    try {
        const { name } = req.body;
        const create = await service.createCategory({ name });
        
        if (create === 'exists') {
          return res.status(409).json({ message: 'Category already registered' });
        }
        return res.status(201).json(create);
      } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
      }
  });

  const findAllCategory = rescue(async (req, res) => {
    try {
        const findCategory = await service.findAllCategory();
        
        if (findCategory === '!exists') {
          return res.status(409).json({ message: 'Category not found' });
        }
        return res.status(200).json(findCategory);
      } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: 'Algo deu errado' });
      }
  });

  module.exports = { 
    createCategory, 
    findAllCategory,
  };