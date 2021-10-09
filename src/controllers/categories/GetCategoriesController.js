const { GetCategoriesService } = require('../../services/categories');
const { errors } = require('../../utils/messages');

class GetCategoriesController {
  static async handle(_req, res, next) {
    const categories = await GetCategoriesService.handle();

    if (categories.isServerError) return next(errors.serverError);

    res.status(200).json(categories);
  }
}

module.exports = GetCategoriesController;
