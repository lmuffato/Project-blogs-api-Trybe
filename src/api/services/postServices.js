const {
  HTTP_BAD_REQUEST,
  HTTP_CREATED,
  HTTP_OK_STATUS,
} = require('../status');

const { BlogPost, Categorie, User } = require('../models');

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

const readAllServices = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { all: true },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      // { model: PostCategorie, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  return { code: HTTP_OK_STATUS, posts };
};

module.exports = {
  createServices,
  readAllServices,
};