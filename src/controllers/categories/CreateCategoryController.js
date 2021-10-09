const { CreateCategoryService } = require('../../services/categories');
const { errors } = require('../../utils/messages');

class CreateCategoryController {
  static async handle(req, res, next) {
    const { name } = req.body;

    const createCategoryService = new CreateCategoryService({ name });

    const category = await createCategoryService.handle();

    if (category.isServerError) return next(errors.serverError);

    res.status(201).json(category);
  }
}

module.exports = CreateCategoryController;
