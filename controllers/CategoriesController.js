const categoriesService = require('../services/categoriesServices');

const createCategorie = async (req, res) => {
  const newCategorie = await categoriesService.createCategorie(req.body);
  return res.status(201).json(newCategorie);
};

module.exports = {
  createCategorie,
};