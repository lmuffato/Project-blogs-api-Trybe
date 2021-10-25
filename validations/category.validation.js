function categoryRequired(request, response, next) {
  const { name } = request.body;

  if (!name) return response.status(400).json({ message: '"name" is required' });

  return next();
}

module.exports = { categoryRequired };