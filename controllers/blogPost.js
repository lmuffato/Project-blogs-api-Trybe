const rescue = require('express-rescue');
const { BlogPost, User } = require('../models');
const httpStatus = require('../utils/httpStatus');

const create = rescue(async (req, res) => {
  const { title: postTitle, content: postContent } = req.body;
  const { email } = req.user;

  const { id: userUID } = await User.findOne({ where: { email } });

  const newBlogPost = await BlogPost.create({
    title: postTitle,
    content: postContent,
    userId: userUID,
    published: new Date(),
    updated: new Date(),
  }).then((newPost) => {
    const { id, title, content, userId } = newPost;
    return res.status(httpStatus.HTTP_CREATE_STATUS).json({ id, title, content, userId });
  }).catch((e) => console.log(e));

  return newBlogPost;
});

const getAll = async (_req, res) => BlogPost.findAll(
  { include: [
    { model: 'BloPost', attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'] },
    { model: 'User', attributes: ['id', 'displayName', 'email', 'image'] },
    { model: 'Category', attributes: [] }] },
  ).then((allPosts) => res.status(httpStatus.HTTP_OK_STATUS).json(allPosts))
    .catch((e) => console.log(e));

module.exports = {
  create,
  getAll,
};
