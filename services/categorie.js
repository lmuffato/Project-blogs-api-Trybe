const { Categorie: CategorieModel } = require('../models');
const Utils = require('../validation/throw');
const { newCategoryValidate } = require('../validation/categorie');

const create = async (name) => {
  const { error } = newCategoryValidate.validate({ name });
  if (error) Utils.throwError(error, 400);
  const { dataValues } = await CategorieModel.create({ name });
  return {
    statusCode: 201,
    category: dataValues,
  };
};

const getAll = async () => {
  const categories = await CategorieModel.findAll();
  return {
    statusCode: 200,
    categories,
  };
};

module.exports = {
  create,
  getAll,
};