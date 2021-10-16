const {
  HTTP_BAD_REQUEST,
  HTTP_NOT_FOUND,
  HTTP_CREATED,
  HTTP_OK_STATUS,
  HTTP_UNAUTHORIZED,
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

const updateServices = async ({ id, title, content }) => {
  const { userId } = await BlogPost.findByPk(id);
  const findUser = await User.findByPk(id);
  const user = findUser.dataValues;
  
  if (user.id !== userId) {
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

module.exports = {
  createServices,
  readAllServices,
  readByIdServices,
  updateServices,
};