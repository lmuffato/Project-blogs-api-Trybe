const categoriesServices = require('../services/categoriesServices');

const criarCategories = async (request, response) => {
  const categories = await categoriesServices.criarCategories(request.body);

  return response.status(201).json(categories);
};

module.exports = {
  criarCategories,
};