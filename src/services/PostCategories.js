const { PostsCategories } = require('../models');

const insertPostCategories = async (categoriesId, postId) => {
  const result = await Promise.all(
    categoriesId.map(async (id) => {
      const cat = await PostsCategories.create({ categoryId: id, postId });
      return cat;
    }),
  );
  return result;
};

module.exports = { insertPostCategories };
