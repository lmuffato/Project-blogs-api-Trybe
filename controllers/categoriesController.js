const express = require('express');
const { validateJWT } = require('../middlewares/validateJWT');
const { Categories } = require('../models');
const categoriesService = require('../services/categoriesService');

const categoriesRouter = express.Router();

categoriesRouter.post('/', validateJWT, async (req, res) => {
  try {
  const { name } = req.body;
  const response = await categoriesService.createCategory(name);
  return res.status(response.status).json(response.message);
  } catch (e) {
    if (!e.status) return res.status(500).json({ message: 'Erro interno', error: e });
    return res.status(e.status).json({ message: e.message });
  }
});

categoriesRouter.get('/', validateJWT, async (_req, res) => {
  try {
    const categories = await Categories.findAll({ attributes: ['id', 'name'] });
    return res.status(200).json(categories);
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
});

module.exports = categoriesRouter;