const { BlogPost, User, Category } = require('../models');
const httpStatus = require('../utils/httpStatus');
const { userByEmail } = require('./usersController');
const { verify } = require('../middlewares/validateJWT');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;
  const payload = verify(authorization);
  const userEmail = payload.email;

  const user = await userByEmail(userEmail);

  const userId = user.id;

  const category = await BlogPost.create({ title,
    content,
    categoryIds,
    userId,
    published: new Date(),
    updated: new Date() });

  const { id } = category;
  const post = { id, userId, title, content };
  
  res.status(httpStatus.created).json(post);
};

const getAllPosts = async (_req, res) => {
  BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] })
  .then((posts) => {
    res.status(httpStatus.ok).json(posts);
  })
  .catch((e) => {
    res.status(httpStatus.serverError).json({ message: e.message });
  });
};

module.exports = {
  createPost,
  getAllPosts,
};
