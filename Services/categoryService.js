const { builtError } = require('./heplers');
const { Category } = require('../models');

const create = async (name) => {
  try {
    return Category.create({ name });
  } catch (e) {
    console.log(e.message);
    return builtError(500, e.message);
  }
};

module.exports = {
  create,
};
