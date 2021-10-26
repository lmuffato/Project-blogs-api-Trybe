const categoriesService = require('../services/categoriesService');

module.exports = {
  async create(req, res) {
    const { name } = req.body;
    const token = req.headers.authorization;

    const response = await categoriesService.createCategory(token, name);

    return res
      .status(response.status)
      .json(
        response.newCategory
          ? { id: response.newCategory.id, name: response.newCategory.name }
          : { message: response.message },
      );
  },

  async index(req, res) {
    const token = req.headers.authorization;

    const response = await categoriesService.getAllCategories(token);

    return res
      .status(response.status)
      .json(
        response.categories
          ? response.categories
          : { message: response.message },
      );
  },
};
