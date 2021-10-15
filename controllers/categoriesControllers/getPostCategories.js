const { Category } = require('../../models');

module.exports = async (categoryIds) => Category.findAll({ where: { id: categoryIds } });
