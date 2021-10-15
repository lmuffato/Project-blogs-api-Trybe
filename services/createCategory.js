const { Categories } = require('../models');

module.exports = async (name) => {
  const category = await Categories.create(name);
 
  return category;
};