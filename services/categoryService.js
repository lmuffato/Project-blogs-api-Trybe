const { Category } = require('../models');
const newCategoryValidations = require('./validations/newCategoryValidations');

exports.create = async (name) => {
  newCategoryValidations.validateName(name);

  const newCategory = await Category.create({ name });

  return { ...newCategory.dataValues, id: newCategory.null };
};

exports.getAll = async () => {
  // Ordenação dos resultados consultado no StackOverflow
  // https://stackoverflow.com/questions/36259532/sequelize-findall-sort-order-in-nodejs
  const categories = await Category.findAll({
    order: [
      ['id', 'ASC'],
    ],
  });

  return categories;
};
