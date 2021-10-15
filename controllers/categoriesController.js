const { Router } = require('express');
const validateCategoty = require('../middlewares/categoryvalidations.js');
const validateJWT = require('../middlewares/validateJWT.js');
const { Category } = require('../models');

const CategoriesRouter = Router();

CategoriesRouter.post('/', validateJWT, validateCategoty, async (req, res) => {
  try {
    const { name } = req.body;
    const categoy = await Category.create({ name });
    return res.status(201).json(categoy);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `Erro: ${e.message}` });
  }
});

CategoriesRouter.get('/', validateJWT, async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: `Erro: ${e.message}` });
  }
});

module.exports = CategoriesRouter;