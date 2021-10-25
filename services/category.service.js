const { Category } = require('../models');

async function listAllCategories() {
  return Category.findAll();
}

async function saveCategory(name) {
  return Category.create({ name });
}

module.exports = { saveCategory, listAllCategories };