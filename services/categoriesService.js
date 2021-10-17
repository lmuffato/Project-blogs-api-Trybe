const { Categories } = require('../models');

async function create(name) {
  const createdCategory = await Categories.create({ name });

  return { code: 201, created: createdCategory };
}

async function getAll() {
  const categories = await Categories.findAll();
  
  return { code: 200, categories };
}

module.exports = {
  create,
  getAll,
};