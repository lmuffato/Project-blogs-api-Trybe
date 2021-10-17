const { Categories } = require('../models');

async function create(name) {
  const createdCategory = await Categories.create({ name });

  return { code: 201, created: createdCategory };
}

module.exports = {
  create,
};