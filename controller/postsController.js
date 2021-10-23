const { BlogPost, User, Category } = require('../models');
const { verify } = require('../auth/tokenAuth');
const { findUser } = require('./usersController');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { authorization } = req.headers;

  const payload = verify(authorization);
  const userEmail = payload.email;
  const userData = await findUser(userEmail);
  const userId = userData.id;

  const category = await BlogPost.create({ title, content, categoryIds, userId });
  const { id } = category;

  const post = { id, userId, title, content };

  res.status(201).json(post);
};

const getPosts = async (_req, res) => {
  BlogPost.findAll({ include: [{ model: User, as: 'user' },
  { model: Category, as: 'categories', atributes: ['id', 'name'] }] })
      .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((e) => {
      console.log(e.message);
      res.status(500).json({ message: 'Deu ruim' });
    });
};

const getPost = async (req, res) => {
  const { id } = req.params;
  const result = await BlogPost.findByPk(id, { include: [{ model: User, as: 'user' },
   { model: Category, as: 'categories', atributes: ['id', 'name'] }] });

   if (result === null) {
    return res.status(404).json({ message: 'Post does not exist' });
   } return res.status(200).json(result);
};

module.exports = {
  create,
  getPosts,
  getPost,
}; 