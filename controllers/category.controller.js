const { saveCategory } = require('../services/category.service');

async function createCategory(request, response) {
  try {
    const { name } = request.body;
    const category = await saveCategory(name);
    return response.status(201).json(category);
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
}

module.exports = { createCategory };