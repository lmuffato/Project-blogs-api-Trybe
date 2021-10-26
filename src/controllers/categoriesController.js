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
          ? response.newCategory
          : { message: response.message },
      );
  },

  async index(req, res) {
    const token = req.headers.authorization;

    const response = await categoriesService.findAll(token);

    return res
      .status(response.status)
      .json(
        response.allCategories
          ? response.allCategories
          : { message: response.message },
      );
  },
};
