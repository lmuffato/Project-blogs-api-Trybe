const categorieService = require('../services/categoryService');

const postCategorie = async (req, res) => {
  try {
    const categorie = await categorieService.postCategorie(req.body);
    if (categorie.message) return res.status(categorie.code).json({ message: categorie.message });
    return res.status(201).json(categorie);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const categorie = await categorieService.getCategory();
    return res.status(200).json(categorie);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = { postCategorie, getCategory };
