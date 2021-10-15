const { PostsCategory } = require('../models');

const create = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const newPost = await PostsCategory.create({ title, content, categoryIds });
  res.status(201).json(newPost);
};

module.exports = {
  create,
};
