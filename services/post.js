const { BlogPost, User } = require('../models');
const { status: { CREATED } } = require('../utils');

const create = async (title, content, email) => {
  const { id } = await User.findOne({ where: { email } });
  const { id: postId } = await BlogPost.create({
    title,
    content,
    userId: Number(id),
    published: Date.now(),
    updated: Date.now(),
  });
  const posted = await BlogPost.findByPk(postId, {
    attributes: { exclude: ['published', 'updated'] },
  });
  return { status: CREATED, message: posted };
};

module.exports = { create };
