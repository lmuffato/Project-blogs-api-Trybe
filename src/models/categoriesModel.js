const { Categories } = require('../../models');

module.exports = {
  async createCategory(name) {
    const category = await Categories.create({ name });

    return category;
  },

  async getAllCategories() {
    const categories = await Categories.findAll();

    return categories;
  },

  async getOneCategory(id) {
    const category = await Categories.findOne({ where: { id } });

    return category;
  },
};
