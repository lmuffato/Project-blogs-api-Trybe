const { saveCategory, listAllCategories } = require('../services/category.service');

async function listCategories(request, response) {
  try {
    const categories = await listAllCategories();
    return response.status(200).json(categories);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

async function createCategory(request, response) {
  try {
    const { name } = request.body;
    const category = await saveCategory(name);
    return response.status(201).json(category);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

module.exports = { createCategory, listCategories };