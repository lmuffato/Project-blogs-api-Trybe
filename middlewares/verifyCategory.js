const { Categories } = require('../models');

const verifyCategorie = async (req, _res, next) => {
  const { categoryIds } = req.body;

  const categorie = await Promise.all(categoryIds.map(async (category) => {
    const findCategory = await Categories.findOne({ where: { id: category } });

    if (!findCategory) return false;

    return true;
  }));

  if (categorie.includes(false)) return next({ code: 400, message: '"categoryIds" not found' });

  next();
};

module.exports = { verifyCategorie };