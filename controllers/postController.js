const { BlogPost, User } = require('../models');

const HTTP_OK = 200;
const HTTP_CREATED = 201;
const HTTP_BAD_REQUEST = 400;

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const { email } = req.user;

  const { id } = await User.findOne({ where: { email } });

  const newPost = await BlogPost.create({
    title,
    content,
    userId: id,
    published: new Date(),
    updated: new Date(),
  });
  return res.status(HTTP_CREATED).json(newPost);
};

const findAllPosts = async (_req, res) => {
  try {
    const allPosts = await BlogPost.findAll({ include: [{ all: true }] });
    return res.status(HTTP_OK).json(allPosts);
  } catch (err) {
    return res.status(HTTP_BAD_REQUEST).json({ message: err.message });
  }
};

module.exports = {
  createPost,
  findAllPosts,
};