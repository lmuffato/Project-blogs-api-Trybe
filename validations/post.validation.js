const { Category } = require('../models');

function postRequired(request, response, next) {
  const { title, content, categoryIds } = request.body;

  if (!title) {
    return response.status(400).json({ message: '"title" is required' });
  }

  if (!content) {
    return response.status(400).json({ message: '"content" is required' });
  }

  if (!categoryIds) {
    return response.status(400).json({ message: '"categoryIds" is required' });
  }

  return next();
}

async function categoryIdsExists(request, response, next) {
  const { categoryIds } = request.body;

  const category = await Category.findByPk(categoryIds[0]);

  if (!category) return response.status(400).json({ message: '"categoryIds" not found' });

  request.category = category;
  return next();
}

module.exports = { postRequired, categoryIdsExists };