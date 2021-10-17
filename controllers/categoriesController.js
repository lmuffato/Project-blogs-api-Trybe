const categoriesServices = require('../services/categoriesService');

const createCategories = async (request, response) => {
  const categories = await categoriesServices.createCategories(request.body);
  
  return response.status(201).json(categories);
};

module.exports = {
  createCategories,
};
