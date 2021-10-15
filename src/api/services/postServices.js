const {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
} = require('../status');

const { BlogPost, Categorie } = require('../models');

const createServices = async ({ id, title, categoryIds, content }) => {
  const categoryIdsFound = await Categorie.findAll({ where: { id: categoryIds } });
  
  if (categoryIdsFound.length !== categoryIds.length) {
    return {
      notFound: true,
      code: HTTP_BAD_REQUEST,
      message: '"categoryIds" not found',
    };
  }

  const data = { userId: id, title, content, published: new Date(), updated: new Date() };

  const blogPost = await BlogPost.create(data);

  return {
    found: true,
    code: HTTP_CREATED,
    blogPost,
  };
};

module.exports = {
  createServices,
};