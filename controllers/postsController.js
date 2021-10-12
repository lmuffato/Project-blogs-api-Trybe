const { BlogPost } = require('../models');
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

module.exports = {
  create,
};