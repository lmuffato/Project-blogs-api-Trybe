const postService = require('../services/postService');

exports.create = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;
    const newPost = await postService.create({ title, content, categoryIds, userId });
    
    return res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    res.status(200).send('Toma aqui todos os posts');
  } catch (err) {
    next(err);
  }
};
