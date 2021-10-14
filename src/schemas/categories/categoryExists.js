const { Category } = require('../../models');

module.exports = async (name = '') => {
  const category = await Category.findOne({ where: { name } });

  if (category) return { status: 409, message: 'Category already registered' };

  return {};
};