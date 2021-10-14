const { BlogPost, User, Category } = require('../models');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { email, password } = req.user;

  try {
    const checkJWT = await User.findOne({ where: { email, password } });
    if (!checkJWT) return res.status(404).json({ message: 'Invalid Token' });

    const result = await BlogPost.create({ 
      title, content, categoryIds, userId: checkJWT.dataValues.id });

    res.status(201).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
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
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const findPost = async (req, res) => {
  const { id } = req.params;
  
  try { 
    const result = await BlogPost.findOne({ 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
      where: { id },
    });
    if (!result) return res.status(404).json({ message: 'Post does not exist' });
    res.status(200).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = {
  createNewPost,
  listPosts,
  findPost,
};
