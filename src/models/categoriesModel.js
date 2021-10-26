const { Category } = require('../../models');

module.exports = {
  async createCategory(name) {
    const category = await Category.create({ name });

    return category;
  },

  async getAllCategories() {
    const categories = await Category.findAll();

    return categories;
  },

  async getOneCategory(id) {
    const category = await Category.findOne({ where: { id } });

    return category;
  },
};
