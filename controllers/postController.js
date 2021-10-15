const { BlogPost } = require('../models');

const create = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { validatedUser: { id } } = req;

    const post = await BlogPost.create({ title, userId: id, content, categoryIds });

    return res.status(201).json(post);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Algo deu errado' })
  }
}

const getAll = async (req, res) => {
  try {
    const posts = await BlogPost.findAll({ include: [{ all: true }] });

    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json({ message: 'Algo deu errado' });
  }
}

module.exports = {
  create,
  getAll,
}
