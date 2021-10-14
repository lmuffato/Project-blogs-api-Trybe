const { BlogPost, User, Category } = require('../models');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email, password } = req.user;

  try {
    const { id: userId } = await User.findOne({ where: { email, password } });

    if (!userId) return res.status(404).json({ message: 'Invalid Token' });

    const result = await BlogPost.create({ 
      title, content, categoryIds, userId });

    return res.status(201).json(result);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

const listPosts = async (_req, res) => {
  try {
    const result = await BlogPost.findAll({
      include: [{
        model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      { 
        model: Category,
        as: 'categories',
      }],
    });
    res.status(200).json(result);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

const findPost = async (req, res) => {
  try { 
    const { id } = req.params;
    const result = await BlogPost.findOne({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
      where: { id },
    });
    if (!result) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(result);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
};

const checkUser = async (id, email, password) => {
  const { id: userId } = await User.findOne({ where: { email, password } });
  const post = await BlogPost.findOne({ where: { id, userId } });
  return post;
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryIds } = req.body;
  const { email, password } = req.user;
  const allowEdit = await checkUser(id, email, password);

  if (!allowEdit) return res.status(401).json({ message: 'Unauthorized user' });
  if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

  await BlogPost.update({ title, content }, { where: { id } });
  const result = await BlogPost.findOne(
    { include: { model: Category, as: 'categories' } }, { where: { id } },
  );

  res.status(200).json(result);
};

module.exports = {
  createNewPost,
  listPosts,
  findPost,
  editPost,
};
