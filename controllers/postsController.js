const { BlogPost, User } = require('../models');

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

module.exports = {
  createPost,
};
