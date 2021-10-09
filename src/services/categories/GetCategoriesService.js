const { Category } = require('../../models');

class GetCategoriesService {
  static async handle() {
    try {
      const categories = await Category.findAll();

      return categories;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = GetCategoriesService;
