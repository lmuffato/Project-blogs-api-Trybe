const { Category, BlogPost, User } = require('../models');

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const result = await Category.create({ name });
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({ message: '"name" is required' });
  }
};

const listCategories = async (_req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const findCategory = async (id) => Category.findOne({ where: { id } });

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

module.exports = {
  createNewCategory,
  listCategories,
  createNewPost,
  findCategory,
};
