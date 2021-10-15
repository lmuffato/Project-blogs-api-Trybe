const { Category } = require('../../models');

module.exports = async (id) => {
  const category = await Category.findOne({ where: { id } });

  if (!category) return { id: 0 };

  return category.dataValues;
};