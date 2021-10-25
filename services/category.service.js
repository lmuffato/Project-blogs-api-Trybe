const { Category } = require('../models');

async function saveCategory(name) {
  return Category.create({ name });
}

module.exports = { saveCategory };