const { HTTP_CREATED } = require('../status');

const { Categorie } = require('../models');

const createServices = async (name) => {
  const category = await Categorie.create({ name });
  
  return {
    created: true,
    code: HTTP_CREATED,
    category,
  };
};

module.exports = {
  createServices,
};