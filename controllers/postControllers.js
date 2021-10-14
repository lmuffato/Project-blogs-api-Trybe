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
  } catch (err) {
    console.log(err);
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
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  createNewPost,
  listPosts,
  findPost,
};
