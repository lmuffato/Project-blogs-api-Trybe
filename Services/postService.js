const { builtError } = require('./heplers');
const { Post, Category } = require('../models');

const create = async (payload, { id }) => {
  try {
    const { categoryIds, ...data } = payload;
    const isNotValid = await Promise.all(
      categoryIds.map((category) => Category.findByPk(category)),
      ).then((res) => res.some((categorie) => !categorie));

    if (isNotValid) return builtError(400, '"categoryIds" not found');
    
    return Post.create({ ...data, userId: id });
  } catch (e) {
    console.log(e.message);
    return builtError(500, e.message);
  }
};

module.exports = {
  create,
};
