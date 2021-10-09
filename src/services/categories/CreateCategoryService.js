const { Category } = require('../../models');

class CreateCategoryService {
  constructor({ name }) {
    this.name = name;
  }

  async handle() {
    try {
      const category = await Category.create({ name: this.name });

      return category;
    } catch (e) {
      console.error(e);
      return { isServerError: true };
    }
  }
}

module.exports = CreateCategoryService;
