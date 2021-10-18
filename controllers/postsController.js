const { BlogPost, User, Category } = require('../models');

async function createPost(req, res) {
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
  // const { _id, userId } = newPost;
  return res.status(201).json(newPost);
}

async function findAllPosts(_req, res) {
  try {
    const allPosts = await BlogPost.findAll({ include: [{ all: true }] });
    return res.status(200).json(allPosts);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

async function findPostById(req, res) {
  try {
    const { id } = req.params;
    const post = await BlogPost.findByPk(id, { 
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    return res.status(200).json(post);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
}

module.exports = {
  createPost,
  findAllPosts,
  findPostById,
};
