const { Categorie } = require('../models');

const create = async (name) => {
  try {
    const created = await Categorie.create({ name });
    return created;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  create,
};
