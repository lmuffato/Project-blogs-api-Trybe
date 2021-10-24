const throwError = (err, statusCode, message = '') => {
  const error = err;
  if (error.isJoi) {
    error.statusCode = statusCode;
    throw error;
  }
  error.statusCode = statusCode;
  error.message = message;
  throw error;
};

const categoryExists = async (ids, categorieModel) => {
  const categories = Promise.all(ids.map(async (id) => {
    const item = await categorieModel.findOne({ where: { id } });
    if (item) return item.dataValues;
    return null;
  }));
  return categories;
};

const postCategorie = async (postId, postCategorieModel, categoriesIds) => {
  console.log(categoriesIds, 'aquii', postId);
  await Promise.all(categoriesIds.map(async (categorie) => (
     postCategorieModel.create({ postId, categoryId: categorie.id })
     )));
};

module.exports = {
  throwError,
  categoryExists,
  postCategorie,
};