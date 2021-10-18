const { Op } = require('sequelize');

const {
  HTTP_BAD_REQUEST,
  HTTP_NOT_FOUND,
  HTTP_CREATED,
  HTTP_OK_STATUS,
  HTTP_UNAUTHORIZED,
  HTTP_NO_CONTENT,
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
    ],
  });

  return { code: HTTP_OK_STATUS, posts };
};

const readByIdServices = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [{ all: true },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ], 
  });

  if (!post) {
    return {
      notFound: true,
      code: HTTP_NOT_FOUND,
      message: 'Post does not exist',
    };
  }

  return { found: true, 
    code: HTTP_OK_STATUS,
    post,
  };
};

const updateServices = async ({ userIdToken, nameUserToken, id, title, content }) => {
  const { userId } = await BlogPost.findByPk(id);
  const { displayName } = await User.findByPk(userId);
  
  if (displayName !== nameUserToken && userId !== parseInt(userIdToken, 10)) {
    return {
      isDifferent: true,
      code: HTTP_UNAUTHORIZED,
      message: 'Unauthorized user',
    };
  }

  await BlogPost.update({ title, content }, { where: { id } });

  const updatePost = await BlogPost.findByPk(id, {
    include: [{ all: true },
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ], 
  });

  return { isUpdated: true, code: HTTP_OK_STATUS, updatePost };
};

const deleteServices = async ({ userIdToken, nameUserToken, id }) => {
  const postFound = await BlogPost.findByPk(id);

  if (!postFound) {
    return {
      isEmpty: true,
      code: HTTP_NOT_FOUND,
      message: 'Post does not exist',
    };
  }

  const { displayName } = await User.findByPk(postFound.userId);

  if (displayName !== nameUserToken && postFound.userId !== userIdToken) {
    return {
      isDifferent: true,
      code: HTTP_UNAUTHORIZED,
      message: 'Unauthorized user',
    };
  }

  await BlogPost.destroy({ where: { id } });
  return { code: HTTP_NO_CONTENT };
};

const queryServices = async (query) => {
  const search = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Categorie, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!search) return { isNull: true, code: HTTP_UNAUTHORIZED, search: [] };
  
  return { code: HTTP_OK_STATUS, search };
};

module.exports = {
  createServices,
  readAllServices,
  readByIdServices,
  updateServices,
  deleteServices,
  queryServices,
};