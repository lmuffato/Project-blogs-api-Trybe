const { 
  HTTP_CREATED,
  HTTP_OK_STATUS,
} = require('../status');

const { Categorie } = require('../models');

const createServices = async (name) => {
  const category = await Categorie.create({ name });
  
  return {
    created: true,
    code: HTTP_CREATED,
    category,
  };
};

const readAllServices = async () => {
  const allCategories = await Categorie.findAll();

  return { code: HTTP_OK_STATUS, allCategories };
};

module.exports = {
  createServices,
  readAllServices,
};